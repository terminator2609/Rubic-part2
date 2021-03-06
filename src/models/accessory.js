const mongoose = require("mongoose")

const newAccessory = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true,
        validate: [/^https:\/\//i, "Invalid image URL.Image URL must start with ,,https:"]
    },

    description: {
        type: String,
        required: String,
        maxlength: 500
    },

    cubes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "new-Cube"
    }]
})

const addAccessory = mongoose.model("accessories", newAccessory)

module.exports = addAccessory