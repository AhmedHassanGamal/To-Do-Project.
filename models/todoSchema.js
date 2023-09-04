const mongoose = require('mongoose')
const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    itemid: {
        type: String,
        required: true,
        unique: true,
    },

})

const todoModel = mongoose.model('Items', todoSchema)
module.exports = todoModel