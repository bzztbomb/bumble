#!/bin/bash

DIR=`dirname ${0}`;

# load env specific config
source ${DIR}/env.sh

set -x

rsync -avv -e "ssh -p ${DEPLOY_PORT}" \
  --progress \
  --delete \
  --exclude node_modules \
  --exclude deploy.sh \
  --exclude update_images.sh \
  --exclude .git \
  --exclude original_images \
  "${DIR}/" \
  "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_DIR}/"

ssh -p ${DEPLOY_PORT} -l ${DEPLOY_USER} ${DEPLOY_HOST} "cd ${DEPLOY_DIR}; npm install"
ssh -p ${DEPLOY_PORT} -l ${DEPLOY_USER} ${DEPLOY_HOST} "cd ${DEPLOY_DIR}; npm install; pgrep -f ${DEPLOY_DIR}/app.js | xargs kill"

# TODO: fancier stuff like restarting, configuring supervisord, etc.
