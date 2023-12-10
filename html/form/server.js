const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/users', (req, res, next) => {
    if (req.body.status === undefined) req.body.status = 'off'
    console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.listen(3003)