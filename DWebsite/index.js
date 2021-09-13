const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => { //checks to see if what endpoint the user used, if nothing then say hello world
    res.send('hello world')
});

app.listen(port, () => {
    console.log(`ChatApp Listening at http://localhost:${port}`); // Server-side response in the console telling that the server is online
})

app.get('/yum', function (req, res) {
    res.sendFile(path.join(__dirname + '/mukbang.html')); //what the end user sees
})

app.get('/secret', function(req, res) {
  res.send('you found the secret market gasp emoji');
})

app.get('/bunger', function(req, res){
  res.sendfile(path.join(__dirname + '/first_view2.html'));
})
