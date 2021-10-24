const express = require("express")

const homeController = require("./controllers/homeController")
const addCubeController = require("./controllers/addCubeController")
const addAccessoryController = require("./controllers/addAccessoryController")
const detailsController = require("./controllers/detailsController")

const router = express.Router()

router.use(homeController)
router.use("/cube/create", addCubeController)
router.use("/cubes/create", addAccessoryController)
router.use("/cube/details", detailsController)


router.get("/rubicApp/about", (req, res) => {
    res.render("about")
})

router.use("*", (req, res) => {
    res.render("404")
})
module.exports = router