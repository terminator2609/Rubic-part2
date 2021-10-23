const mongoose = require("mongoose")

function setDb(dbstring) {
    return mongoose.connect(dbstring)
}

module.exports = setDb