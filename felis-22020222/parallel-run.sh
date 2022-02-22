#!/bin/sh

mkdir -p out

for i in {1..8} ; do
  ./target/release/felis-22020222 > out/out-$i.txt &
done