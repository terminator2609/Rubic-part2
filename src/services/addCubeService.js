const newCube = require("../models/newCube")

const getCubeById = (id) => newCube.findById(id).lean()

async function addNewCubeToDB (req, res) {
    return newCube.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: req.body.difficultyLevel
    })
}

const allCommand = {
    addNewCubeToDB,
    getCubeById
}

module.exports = allCommand