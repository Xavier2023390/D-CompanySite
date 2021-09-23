//Imports
const express = require('express')

const app = express()
const port = 5000

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// set template
app.use(expressLayouts)
app.set('view  engine', 'ejs')

// Navigation
app.get('', (req,res)=> {
  res.render('index')
})

app.get('/about', (req,res)=> {
  res.render('about')
})

//Listen on port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))
