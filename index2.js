const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/dog', function(req, res) {
    res.send({'sound': 'Wow bow'})
})

app.get('/cat', function(req, res) {
    res.send({'sound': 'Meow'})
})

app.listen(3000)