use chrono::prelude::*;

// const L: usize = 7200000; // 1.8s
const L: usize = 22222222; // 6s

fn main() {
    println!("{}", Utc::now());

    let res = (0..L).map(|_| Utc::now().timestamp_nanos());

    let joined: String = res.map(|id| id.to_string() + "\n").collect();

    println!("{}", joined);
    println!("{}", Utc::now());
}
