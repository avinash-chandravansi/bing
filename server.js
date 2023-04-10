const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/add', function(req, res) {
    console.log(req.query);
    res.send(req.query);
  });
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

