const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params
    console.log(name)
    /*
    위와 같은 코드 위에는 json 형식으로 된다.
    const p = req.params
    p.name
    */
    res.json({'sound': '야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})