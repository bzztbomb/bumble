'use strict';
const express = require('express');
const imageList = require('./imagelist');

const app = express();
const PORT = 8080;

app.use(express.static('static'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('splash');
});

app.get('/v', (req, res) => {
  res.render('main');
});

app.get('/images', (req, res) => {
  imageList.list()
    .then(files => res.json(files));
});

app.listen(8080, function () {
  console.log(`Bumble started on ${PORT}`);
});
