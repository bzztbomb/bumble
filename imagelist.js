'use strict';

const fs = require('fs');

function list(){
  return new Promise((fulfill, reject) => {
    fs.readdir(`${__dirname}/static/images`, (err, data) => {
      if(err) return reject(err);
      fulfill(data.map( file => `/static/images/${file}`));
    });
  });
}

module.exports = {
  list: list
}
