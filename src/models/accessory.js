const mongoose = require("mongoose")

const newAccessory = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: String,
        maxlength: 200
    },
})

const addAccessory = mongoose.model("accessories", newAccessory)

module.exports = addAccessory