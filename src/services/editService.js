const cube = require("../models/newCube")

const getCubeById = (id) => cube.findById(id).lean()

const editCubeInfo = (id, cubeInfo) => cube.findByIdAndUpdate(id, {name: cubeInfo.name, description: cubeInfo.description, imageUrl: cubeInfo.imageUrl, difficultyLevel: cubeInfo.difficultyLevel})

const allCommands = {
    getCubeById,
    editCubeInfo
}

module.exports = allCommands