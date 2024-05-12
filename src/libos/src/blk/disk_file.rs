//! Block device as file.
use super::{BlockDevice, BlockDeviceExt, RawDisk, GB};
use crate::fs::*;
use crate::prelude::*;
use crate::util::sgx::get_autokey;

use core::any::Any;
use core::sync::atomic::{AtomicUsize, Ordering};
use rcore_fs::vfs::{FileType, Metadata, Timespec};
use std::io::SeekFrom;
use std::path::PathBuf;
use sworndisk_v2::{AeadKey, BlockSet, SwornDisk, BLOCK_SIZE};

lazy_static! {
    pub static ref SWORNDISK: RwLock<Option<Arc<SwornDisk<RawDisk>>>> = { RwLock::new(None) };
    pub static ref SWORNDISK_METADATA: RwLock<SwornDiskMeta> =
        { RwLock::new(SwornDiskMeta::default()) };
}

pub const DEV_SWORNDISK_PATH: &str = "/dev/sworndisk";
pub const DEFAULT_SWORNDISK_SIZE: usize = 10 * GB;

/// A file wrapper for a block device.
pub struct DiskFile {
    disk: Arc<dyn BlockDevice>,
    offset: AtomicUsize,
}

/// Metadata for SwornDisk.
pub struct SwornDiskMeta {
    size: usize,
    root_key: AeadKey,
    image_dir: PathBuf,
}

/// Open a block device as a file.
pub fn try_open_disk(abs_path: &str) -> Result<Option<Arc<DiskFile>>> {
    if !abs_path.starts_with("/dev") {
        return Ok(None);
    }

    let disk: Arc<dyn BlockDevice> = match abs_path {
        // Currently only support SwornDisk
        DEV_SWORNDISK_PATH => {
            let mut sworndisk_opt = SWORNDISK.write().unwrap();
            if let Some(sworndisk) = sworndisk_opt.as_ref() {
                sworndisk.clone()
            } else {
                let metadata = SWORNDISK_METADATA.read().unwrap();
                let total_blocks = metadata.size / BLOCK_SIZE;
                let image_path = {
                    let mut path = metadata.image_dir.clone();
                    path.push("sworndisk.image");
                    path
                };
                let raw_disk = RawDisk::open_or_create(total_blocks, image_path.to_str().unwrap())?;
                let root_key = metadata.root_key;

                let sworndisk = Arc::new(
                    SwornDisk::open(raw_disk.clone(), root_key, None)
                        .unwrap_or_else(|e| SwornDisk::create(raw_disk, root_key, None).unwrap()),
                );
                sworndisk_opt.insert(sworndisk.clone());
                sworndisk
            }
        }
        _ => {
            return Ok(None);
        }
    };

    let disk_file = Arc::new(DiskFile::new(disk));
    Ok(Some(disk_file))
}

impl Default for SwornDiskMeta {
    fn default() -> Self {
        Self {
            size: DEFAULT_SWORNDISK_SIZE,
            root_key: AeadKey::default(),
            image_dir: PathBuf::from("run"),
        }
    }
}

impl SwornDiskMeta {
    pub fn setup(
        disk_size: Option<u64>,
        user_key: &Option<sgx_key_128bit_t>,
        source_path: Option<&PathBuf>,
    ) -> Result<()> {
        let mut metadata = SWORNDISK_METADATA.write().unwrap();
        if let Some(disk_size) = disk_size {
            metadata.size = disk_size as _;
        };
        if let Some(source_path) = source_path {
            metadata.image_dir = source_path.clone();
        }
        let root_key = if let Some(user_key) = user_key {
            *user_key
        } else {
            get_autokey(&metadata.image_dir)?
        };
        metadata.root_key = AeadKey::from(root_key);
        Ok(())
    }
}

impl DiskFile {
    pub fn new(disk: Arc<dyn BlockDevice>) -> Self {
        Self {
            disk,
            offset: AtomicUsize::new(0),
        }
    }

    pub fn disk(&self) -> &Arc<dyn BlockDevice> {
        &self.disk
    }
}

impl File for DiskFile {
    fn read(&self, buf: &mut [u8]) -> Result<usize> {
        let offset = self.offset.fetch_add(buf.len(), Ordering::Release);

        self.read_at(offset, buf)
    }

    fn write(&self, buf: &[u8]) -> Result<usize> {
        let offset = self.offset.fetch_add(buf.len(), Ordering::Release);

        self.write_at(offset, buf)
    }

    fn read_at(&self, offset: usize, buf: &mut [u8]) -> Result<usize> {
        if rw_args_block_aligned(offset, buf.len()) {
            self.disk
                .read_blocks((offset / BLOCK_SIZE) as _, &mut [buf])?;
        } else {
            self.disk.read_bytes(offset, buf)?;
        }

        Ok(buf.len())
    }

    fn write_at(&self, offset: usize, buf: &[u8]) -> Result<usize> {
        if rw_args_block_aligned(offset, buf.len()) {
            self.disk.write_blocks((offset / BLOCK_SIZE) as _, &[buf])?;
        } else {
            self.disk.write_bytes(offset, buf)?;
        }

        Ok(buf.len())
    }

    fn seek(&self, pos: SeekFrom) -> Result<off_t> {
        let cur_offset = self.offset.load(Ordering::Acquire);

        // Invariant: 0 <= new_offset <= i64::max_value()
        let new_offset: i64 = match pos {
            SeekFrom::Start(off /* as u64 */) => {
                if off > i64::max_value() as u64 {
                    return_errno!(EINVAL, "file offset is too large");
                }
                off as i64
            }
            SeekFrom::End(off /* as u64 */) => {
                let file_size = self.disk.total_bytes() as i64;
                debug_assert!(file_size >= 0);
                file_size
                    .checked_add(off)
                    .ok_or_else(|| errno!(EOVERFLOW, "file offset overflow"))?
            }
            SeekFrom::Current(off /* as i64 */) => (cur_offset as i64)
                .checked_add(off)
                .ok_or_else(|| errno!(EOVERFLOW, "file offset overflow"))?,
        };
        if new_offset < 0 {
            return_errno!(EINVAL, "file offset must not be negative");
        }

        self.offset.store(new_offset as usize, Ordering::Release);
        Ok(new_offset)
    }

    fn metadata(&self) -> Result<Metadata> {
        Ok(Metadata {
            dev: 0,
            inode: 0xfe23_1d08,
            size: self.disk.total_bytes(),
            blk_size: BLOCK_SIZE,
            blocks: self.disk.total_blocks(),
            atime: Timespec { sec: 0, nsec: 0 },
            mtime: Timespec { sec: 0, nsec: 0 },
            ctime: Timespec { sec: 0, nsec: 0 },
            type_: FileType::File,
            mode: 0o666,
            nlinks: 1,
            uid: 0,
            gid: 0,
            rdev: 0,
        })
    }

    fn sync_all(&self) -> Result<()> {
        self.disk.sync()?;
        Ok(())
    }

    fn sync_data(&self) -> Result<()> {
        self.disk.sync()?;
        Ok(())
    }

    fn access_mode(&self) -> Result<AccessMode> {
        Ok(AccessMode::O_RDWR)
    }

    fn status_flags(&self) -> Result<StatusFlags> {
        Ok(StatusFlags::empty())
    }

    fn set_len(&self, len: u64) -> Result<()> {
        Ok(())
    }

    fn as_any(&self) -> &dyn Any {
        self
    }
}

fn rw_args_block_aligned(offset: usize, buf_len: usize) -> bool {
    if offset % BLOCK_SIZE == 0 && buf_len > 0 && buf_len % BLOCK_SIZE == 0 {
        true
    } else {
        false
    }
}

impl Debug for DiskFile {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        f.debug_struct("DiskFile")
            .field("offset", &self.offset)
            .finish()
    }
}
