#!/bin/bash

DIR=`dirname "$0"`
rsync -avv --delete --exclude README.md \
	"${DIR}/original_images/" "${DIR}/static/images/"

OIFS="$IFS"
IFS=$'\n'
for f in `find "${DIR}/static/images/"` ; do
	echo "$f"
	mogrify -resize 750x750\> -trim $f
done
IFS="$OIFS"
