use std::fs::File;
use std::io::prelude::*;

const MB: usize = 1024 * 1024;

fn main() {
    println!("Hello, world!");
    let file_size = 20 * 1024 * MB;
    let mut file = File::create("ci_disk_test.f").unwrap();
    file.set_len(file_size as u64).unwrap();
    println!("File set size");
    let wbuf = vec![5u8; 1 * MB];
    for _ in 0..(file_size / wbuf.len()) {
        file.write_all(&wbuf).unwrap();
    }
    println!("Write complete");
}
