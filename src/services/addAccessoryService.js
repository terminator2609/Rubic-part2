const newAccessory = require("../models/accessory")

const getAllAcc = () => newAccessory.find({}).lean()

async function addNewAccessoryToDb(req, res) {
    return newAccessory.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
}

// async function filterAccessory(cubeId) {

// }

const allCommand = {
    addNewAccessoryToDb,
    getAllAcc
}

module.exports = allCommand