// import files and packages up here
const express = require('express');
const logger = require('morgan');
const data = require('./data')
// const fs = require('fs');

const app = express();
app.use(logger('combined'))

app.get('/', (req, res) => res.status(200).send(`<h1>Hello World</h1>`))

app.get('/data', (req, res) => res.status(200).send(data))

// app.get('/data', (req, res) => 
//   fs.readFile('./server/data.json', 'utf8', (err, data) => {
//     if(err) throw err;
//     res.status(200).send(data)
//   })
// )

module.exports = app;
