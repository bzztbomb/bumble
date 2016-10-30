'use strict';

const fs = require('fs');
const _ = require('lodash');
const CACHE_S = 30;

let imageList = null;
let lastLoadTime = 0;

function random(){
  return lazyList()
      .then(files => {
        return files[_.random(0, files.length - 1)];
      });
}

function lazyList(){
  let now = new Date().getTime() / 1000;
  if(!imageList || (now - lastLoadTime > CACHE_S)){
    return list()
      .then(files => {
        imageList = files;
        lastLoadTime = now;
        return files;
      });
  }
  return Promise.resolve(imageList);
}

function list(){
  return new Promise((fulfill, reject) => {
    fs.readdir(`${__dirname}/static/images`, (err, files) => {
      if(err) return reject(err);
      fulfill(files);
    });
  });
}

module.exports = {
  random: random
}
