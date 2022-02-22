use chrono::prelude::*;

// n=1 720000 4s
// n=22 720000 40s
// for _ in 0..72000 {
const L: usize = 720000;

fn main() {
    println!("{}", Utc::now());

    let res = (0..L).map(|_| Utc::now().timestamp_nanos());

    let joined: String = res.map(|id| id.to_string() + "\n").collect();

    println!("{}", joined);
    println!("{}", Utc::now());
}
