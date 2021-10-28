const userModel = require("../../models/auth")
const bcrypt = require("bcrypt")

const getUser = (username) => userModel.find({username})

async function checkPassword(password, hash) {
    const checker = await bcrypt.compare(password, hash)

    return checker
}

const allCommand = {
    getUser,
    checkPassword
}

module.exports = allCommand