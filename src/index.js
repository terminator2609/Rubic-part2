const express = require("express")
const setDb = require("./database/database")
const path = require("path")
const config = require("./config/config.json")[process.env.NODE_ENV]
const cookieParser = require("cookie-parser")
const allCommand = require("./middleware/auth")

const app = express()

const router = require("./routers")

require("./config/handlebars")(app)

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "./public")))

app.use(cookieParser())

app.use(allCommand.verifyToken)

app.use(router)

setDb(config.DB_CONNECTION_STRING)
    .then(
        app.listen(config.PORT, () => console.log(`Express server start on port ${config.PORT}`))
    )
    .catch((error) => {
        console.log(error)
    })
