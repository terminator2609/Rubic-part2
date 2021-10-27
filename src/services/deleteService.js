const cube = require("../models/newCube")

const getCubeById = (id) => cube.findById(id).lean()

const deleteCube = (id, cubeInfo) => cube.findByIdAndDelete(id)

const allCommands = {
    getCubeById,
    deleteCube
}

module.exports = allCommands