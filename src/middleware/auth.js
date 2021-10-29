const jwt = require("jsonwebtoken")
const { SECRET } = require("../constant")


const verifyToken = async (req, res, next) => {
    const token = req.cookies["new_token"]

    if (!token) {
        return next()
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET)
        req.user = decodedToken
    } catch (error) {
        return res.status(401).redirect('/user/login');
    }

    next()
}



const checkForToken = (req, res, next) => {
    if (!req.user) {
        return res.status(401).redirect('/user/login')
    }

    next()
}

const allCommand = {
    verifyToken,
    checkForToken
}

module.exports = allCommand

