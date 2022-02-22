use chrono::prelude::*;

fn main() {
    for _ in 0..720000 {
        println!("{}", Local::now());
    }
}
