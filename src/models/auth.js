const mongoose = require("mongoose")

const auth = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const user = mongoose.model("users", auth)

module.exports = user