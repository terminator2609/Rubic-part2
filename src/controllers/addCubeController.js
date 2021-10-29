const express = require("express")
const addCubeService = require("../services/addCubeService")
const allCommand = require("../middleware/auth")

const router = express.Router()

const getAddCubePage = (req, res) => {
    res.render("create")
}

const postDataToDb = async (req, res) => {

    try {
        await addCubeService.addNewCubeToDB(req, res)
        res.redirect("/")
    } catch (error) {
        res.send(error.errors.imageUrl.message).end()
    }
}

router.get("/newCube", allCommand.checkForToken ,getAddCubePage)
router.post("/newCube", allCommand.checkForToken, postDataToDb)

module.exports = router