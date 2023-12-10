const port = 3003

const database = require('./database')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/produtos', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/produtos/:id', (req, res, next) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.get('/produtos', (req, res, next) => {
    res.send(database.getProducts()) // converte o objeto para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.delete('/produtos/:id', (req, res, next) => {
    product = database.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(port, ()=>{
    console.log(`Server executando na porta ${port}.`)
})