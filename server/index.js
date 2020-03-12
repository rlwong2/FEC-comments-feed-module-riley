const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const $ = require('jquery');

let app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/song', (req, res, next) => {

})

app.get('/artist', (req, res, next) => {

})

app.get('/comments', (req, res, next) => {

})

let port = 3000;

app.listen(port, () => {console.log(`Now playing: ${port}`)});

module.exports = app;