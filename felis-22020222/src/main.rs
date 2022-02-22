use chrono::prelude::*;

fn main() {
    // n=1 720000 4s
    // n=22 720000 40s
    // for _ in 0..72000 {
    for _ in 0..720000 {
        println!("{}", Local::now());
    }
}
