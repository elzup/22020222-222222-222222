#!/bin/sh

mkdir -p out

for i in {1..4} ; do
  ./target/release/felis-22020222 > out/out-$i.txt &
  echo "$ ./target/release/felis-22020222 > out/out-$i.txt"
done