const handlebars = require("express-handlebars")
const path = require("path")
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const initHandlebars = (app) => {
    app.set("views", path.resolve(__dirname, "../views"))

    app.engine("hbs", handlebars({
        extname: "hbs",
        handlebars: allowInsecurePrototypeAccess(Handlebars)
    }))

    app.set("view engine", "hbs")
}

module.exports = initHandlebars