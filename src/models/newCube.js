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
    },
    difficultyLevel: {
        type: Number,
        required: true,
        min: 1,
        max: 6
    } 
})

const newCube = mongoose.model("new-Cube", newCubeModel)

module.exports = newCube

