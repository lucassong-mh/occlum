//! Block layer.
mod disk_file;
mod raw_disk;

pub use self::disk_file::{try_open_disk, DiskFile, SwornDiskMeta, DEV_SWORNDISK_PATH};
pub use self::raw_disk::RawDisk;

pub use ext2_rs::{Bid, BlockDevice, BlockDeviceExt};

pub const BLOCK_SIZE: usize = 0x1000;

pub const MB: usize = 1024 * 1024;
pub const GB: usize = 1024 * MB;
