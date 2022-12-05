const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.get('/user/:id', function(req, res) {
    // const q = req.params
    // console.log(q.id)

    const q = req.query
    console.log(q)


    res.json({'userName': q.name})
})

app.listen(3000)