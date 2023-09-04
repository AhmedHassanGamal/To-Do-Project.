const todoController = require('../Controller/todoController')
const express = require('express')

const route = express.Router()
module.exports = route
route.get('/', todoController.AddAndFindTODO)
route.post('/', todoController.addtodo)
route.patch('/updatetodo', todoController.updatetodo)
route.delete('/deletetodo/:todo', todoController.deletetodo)

