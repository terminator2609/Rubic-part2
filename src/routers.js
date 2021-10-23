const express = require("express")

const homeController = require("./controllers/homeController")
const addCubeController = require("./controllers/addCubeController")

const router = express.Router()

router.use(homeController)
router.use("/cube/create", addCubeController)

module.exports = router