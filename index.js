const express = require('express')
const app = express()
//const port = 3000 //아래 콘솔창을 띄우기 위한 변수 설정

app.get('/', function(req, res) {
    res.send('Hello World')
})

app.listen(3000)

/*
 * 아래 콘솔창에 포트번호에 대한 설명을 출력하기 위한 코드
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
*/

