const user = require("../../models/auth")
const bcrypt = require("bcrypt")


const hashOnPass = (password) => bcrypt.hash(password, 9)

async function registerUser(username, password) {
    return user.create({
        username,
        password
    })
}

const allCommand = {
    registerUser,
    hashOnPass
}

module.exports = allCommand