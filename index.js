const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`ChatApp Listening at http://localhost:${port}`); // Server-side response in the console telling that the server is online
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/home.html')); //what the end user sees
})

app.get('/yum', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/misc/mukbang.html')); //what the end user sees
})

app.get('/secret', function(req, res) {
  res.send('you found the secret market gasp emoji');
})

app.get('/Baalismommy', function(req, res){
    res.sendFile(path.join(__dirname + `/public/pages/misc/first_view.html`));
});

app.get('/bunger', function(req, res){
  res.sendFile(path.join(__dirname + '/public/misc/first_view2.html'));
})
