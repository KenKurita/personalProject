const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'fixtures'
})

connection.connect(function(err) {
  if (err) {
    console.log(err)
  }
})

module.exports = connection