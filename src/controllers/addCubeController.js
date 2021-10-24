const express = require("express")
const addCubeService = require("../services/addCubeService")

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

router.get("/newCube", getAddCubePage)
router.post("/newCube", postDataToDb)

module.exports = router