//imports
const express = require('express')

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
app.get('/',function (req, res) {
res.render('pages/home')
});
app.get('/about',function (req, res) {
res.render('pages/about')
});
app.get('/seth',function (req, res) {
res.render('pages/profile', {
  name: "Seth Martin",
  position: "Senior Programming Student",
  header1: `Server Hosting / Company Design`,
  profile: `<p>I want to own my own server hosting company, to let people rent out Virtual Private Servers</p>`
})
});
app.get('/xavier',function (req, res) {
res.render('pages/profile', {
  name: "Xavier matheson",
  position: "Junior Programming Student",
  header1: `Beginner programmer`,
  profile: `<p>I want ot be able to use my skills I learned in programming in a jobs</p>`
})
});
app.get('/jacob',function (req, res) {
res.render('pages/profile', {
  name: "Jacob Smith",
  position: "Junior Programming Student",
  header1: `Programmer`,
  profile: `<p>I would like to be able to program video games and other projects so I have them to show to employers</p>`
})
});
app.get('/saimye',function (req, res) {
res.render('pages/profile', {
  name: "saimye",
  position: "Senior Programming Student",
  header1: `Header here`,
  profile: `<p>I want to own my own server hosting company, to let people rent out Virtual Private Servers</p>`
})
});
app.listen(port, () => console.log(`MasterEJS app Started on port ${port}!`));
