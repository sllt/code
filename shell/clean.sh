#!/usr/bin/env bash

#
#桌面清洁
#

cd /home/sllt/Desktop
mkdir backup
for file in `ls`
do
  mkdir backup/${file##*.}
  cp $file `echo backup/${file##*.}/`
done
