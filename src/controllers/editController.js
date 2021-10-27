const express = require("express")
const allCommands = require("../services/editService")

const router = express.Router({ mergeParams: true })

const getEditPage = async (req, res) => {
    const cube = await allCommands.getCubeById(req.params.id)
    res.render("editCubePage", { cube })
}

const updateCube = async (req, res) => {
    await allCommands.editCubeInfo(req.params.id, req.body)
    res.redirect("/")


}

router.get("/editCube", getEditPage)
router.post("/editCube", updateCube)


module.exports = router