const newCube = require("../models/newCube")

async function getCubesfromDb() {
    return newCube.find({}).lean()
}

const allMethods = {
    getCubesfromDb
}

module.exports = allMethods