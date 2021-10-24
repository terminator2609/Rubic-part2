const express = require("express")

const homeController = require("./controllers/homeController")
const addCubeController = require("./controllers/addCubeController")
const addAccessoryController = require("./controllers/addAccessoryController")
const detailsController = require("./controllers/detailsController")
const attachAccessoryController = require("./controllers/attachAccessoryController")


const router = express.Router()

router.use(homeController)
router.use("/cube/create", addCubeController)
router.use("/cube/details", detailsController)
router.use("/cube/attach/accessory", attachAccessoryController)
router.use("/cubes/create", addAccessoryController)



router.get("/rubicApp/about", (req, res) => {
    res.render("about")
})

router.get("*", (req, res) => {
    res.render("404")
})
module.exports = router