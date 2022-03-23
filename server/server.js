const express = require('express');
const db = require('./db')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});``

app.get('/api/notes', (req, res) => {
  let string = 'SELECT * from notes'
  db.query(string, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result);
      res.send(result);
    }
  })
});