const newCube = require("../models/newCube")
const newAccessory = require("../models/accessory")

const getCubeById = (id) => newCube.findById(id).lean()

async function addNewCubeToDB (req, res) {
    return newCube.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: req.body.difficultyLevel
    })
}

async function attachAccessory(cubeId, accessoryId) {
    const cube = await newCube.findById(cubeId)
    const accessory = await newAccessory.findById(accessoryId)

    cube.accessories.push(accessory)
    accessory.cubes.push(cube)

    cube.save()
    accessory.save()
}

const allCommand = {
    addNewCubeToDB,
    getCubeById,
    attachAccessory
}

module.exports = allCommand