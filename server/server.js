const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const bodyParse = require('body-parser');
const database = require('../database/index.js');
app.use(express.static(__dirname + '/../client/public'));
app.use(express.urlencoded({extended: true}));


app.post('/fixtures', (req, res) => {
  console.log(req.body, 'post fixtre here //////////////////////////////')
  let num = Number(req.body.fixturePrice)
  let lowerCase = req.body.fixtureName.toLowerCase();
  let exists = false;
  database.query(`INSERT INTO fixturesTable (part, price) values ('${lowerCase}', ${num}) ON DUPLICATE KEY UPDATE part=part, price=${num};`, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully created fixture');
      res.send(201)
    }
  })
})

app.get('/fixtures', (req, res) => {

  let lowerCase = req.query.fixtureName;
  lowerCase = lowerCase.toLowerCase();
  database.query(`SELECT price FROM fixturesTable WHERE part = '${lowerCase}'`, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully pulled from database')
      res.send(data)
    }
  })
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})