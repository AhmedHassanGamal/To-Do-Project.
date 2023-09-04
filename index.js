const express = require("express")
const http = require('http')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ejs = require('ejs')
const todo = require('./models/todoSchema')

const app = express()
require("dotenv").config()
app.set('port', process.env.port)
app.set('tamplate engine', 'ejs')
app.set('views', 'temp')
app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//////////////////////////////////////////
mongoose.connect("mongodb://0.0.0.0:27017/ToDo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conncted To DataBase .. ")
}).catch((err) => {
    console.log(`Error Is --> ${err}`)
})



const todorouter = require('./routes/todoRoutes')
app.use('/', todorouter)

const httpserver = http.createServer(app)
httpserver.listen(app.get('port'), () => {
    console.log(`Connected To Server --> ${process.env.port} `)
})
