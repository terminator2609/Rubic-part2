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

    cubes: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newCube"
    }
})

const addAccessory = mongoose.model("accessories", newAccessory)

module.exports = addAccessory