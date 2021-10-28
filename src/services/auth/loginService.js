const userModel = require("../../models/auth")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { SECRET } = require("../../constant")

const getUser = (username) => userModel.find({ username })

async function checkPassword(password, hash) {
    const checker = await bcrypt.compare(password, hash)

    return checker
}


async function createToken(user) {
    const payload = {
        _id: user._id,
        username: user.username
    }


    return jwt.sign(payload, SECRET)
}

const allCommand = {
    getUser,
    checkPassword,
    createToken
}

module.exports = allCommand