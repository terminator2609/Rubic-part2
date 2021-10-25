const newCube = require("../models/newCube")
// const newAccessory = require("../models/accessory")

const getDetaisForCube = (id) =>  newCube.findById(id).lean()

const getAccessories = (id) => newCube.findById(id).populate("accessories").lean()

const allCommand = {
    getDetaisForCube,
    getAccessories
}

module.exports = allCommand