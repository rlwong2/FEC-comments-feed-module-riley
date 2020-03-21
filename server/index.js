const db = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const $ = require('jquery');
const router = require('./router.js');

let app = express();

// Serve up static html
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Router
app.use('/', router);

let port = process.env.NODE_ENV === 'test' ? 3001 : 3000;

app.listen(port, () => {console.log(`Now playing: ${port}`)});

module.exports = app;