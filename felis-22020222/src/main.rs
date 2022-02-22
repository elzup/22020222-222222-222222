use chrono::prelude::*;

fn main() {
    for _ in 0..10000 {
        println!("{}", Local::now());
    }
}
