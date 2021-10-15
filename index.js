//imports
const express = require('express');
const fs = require('fs');
var path = require('path');
//constants
const app = express();
//make the port
const port = 3000;
// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
//setup public folder
app.use(express.static('./public'));

var rawdata = fs.readFileSync('profiles.json');
var profiles = JSON.parse(rawdata);
rawdata = fs.readFileSync('comments.json');
var commentFile = JSON.parse(rawdata);

app.get('/',function (req, res) {
res.render('pages/home')
});
app.get('/about',function (req, res) {
res.render('pages/about')
});
app.get('/seth',function (req, res) {
res.render('pages/profile', profiles.seth)
});
app.get('/xavier',function (req, res) {
res.render('pages/profile', profiles.xavier)
});
app.get('/jacob',function (req, res) {
res.render('pages/profile', profiles.jacob)
});
app.get('/saimye',function (req, res) {
res.render('pages/profile', profiles.saimye)
});
app.get('/feedback',function (req, res) {
  res.render('pages/feedback.ejs')
});
app.post('/feedback',function (req, res) {
  let object = {
    name: req.body.name,
    adjective: req.body.adjective
  }
  //check to make sure both varaiables have a value
  if (object.name && object.adjective) {
    object = JSON.stringify(object)
    fs.writeFile('comments.json', object, 'utf8', function(){
      res.send("Wrote to file")
    })
  } else {
    res.send('You forgot your parameters')
  }
  //write file
});
app.listen(port, () => console.log(`Team D Site started on port ${port}!`));
