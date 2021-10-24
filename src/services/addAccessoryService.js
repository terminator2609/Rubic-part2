const newAccessory = require("../models/accessory")

async function addNewAccessoryToDb (req, res) {
    return newAccessory.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    })
}

const allCommand = {
    addNewAccessoryToDb
}

module.exports = allCommand