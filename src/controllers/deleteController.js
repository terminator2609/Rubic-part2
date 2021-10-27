const express = require("express")

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

router.get("/deleteCube", getEditPage)
router.post("/deleteCube", deleteCubeFromDbAndApp)

module.exports = router