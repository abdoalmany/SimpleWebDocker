const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('welcome!');
});

app.listen(8081, () => {
  console.log('Listening on port 8080');
});
