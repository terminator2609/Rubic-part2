const mongoose = require("mongoose")

const newCubeModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200
    },
    imageUrl: {
        type: String,
        required: true,
        validate: [/^https:\/\//i, "Invalid image URL.Image URL must start with ,,https:"]
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    },

    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: "accessory"
        }]
})

const newCube = mongoose.model("new-Cube", newCubeModel)

module.exports = newCube

