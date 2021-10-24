const newCube = require("../models/newCube")

async function addNewCubeToDB (req, res) {
    return newCube.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: req.body.difficultyLevel
    })
}

const allCommand = {
    addNewCubeToDB
}

module.exports = allCommand