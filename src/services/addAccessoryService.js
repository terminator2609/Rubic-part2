const newAccessory = require("../models/accessory")

const getAllAcc = () => newAccessory.find({}).lean()

async function addNewAccessoryToDb (req, res) {
    return newAccessory.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
}

const allCommand = {
    addNewAccessoryToDb,
    getAllAcc
}

module.exports = allCommand