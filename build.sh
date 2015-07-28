#!/bin/bash

if [ ! -d "dist" ]; then
	mkdir dist
fi
mkdir tmp
grep -v -e '^$' rawdata.txt | sed "s/　//g" | awk '{printf "%s,%s\n", $1, $2}' > tmp/data.txt
./convert.js tmp/data.txt > dist/carc.js
rm -rf tmp
