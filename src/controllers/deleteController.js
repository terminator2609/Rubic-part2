const express = require("express")
const allCommand = require("../middleware/auth")

const router = express.Router({mergeParams: true})

const allCommands = require("../services/deleteService")

const getEditPage = async (req, res) => {
    const cube = await allCommands.getCubeById(req.params.id)
    res.render("deleteCubePage", {cube})
}

const deleteCubeFromDbAndApp = async (req, res) => {
    await allCommands.deleteCube(req.params.id)
    res.redirect("/")
}

router.get("/deleteCube", allCommand.checkForToken ,getEditPage)
router.post("/deleteCube", allCommand.checkForToken,deleteCubeFromDbAndApp)

module.exports = router