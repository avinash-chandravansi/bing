const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const fs = require('fs');
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

  app.get('/fetch', function(req, res) {


    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (!err) {
         res.send(data)
         
      }
      else
      {
        res.send(err)
      }
  });
  });

  app.get('/add', function(req, res) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (!err) {
          let jsonArray = JSON.parse(data);
          jsonArray.push(req.query);
          let json = JSON.stringify(jsonArray);
          fs.writeFile('./data.json', json, (err) => {
              if (!err) {
                  console.log('done');
                  res.send("Done");
              }
          });
      }
  });

   
    
  });
  
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

