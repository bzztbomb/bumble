#!/bin/bash

DIR=`dirname "$0"`
rsync -avv "${DIR}/original_images/" "${DIR}/static/images/"
for f in `find "${DIR}/static/images/"` ; do
	echo "$f"
	mogrify -trim "${f}"
done
