const express = require("express")
const allCommandCube = require("../services/addCubeService")
const allCommandAcc = require("../services/addAccessoryService")
const allCommand = require("../middleware/auth")

const router = express.Router()

const getAttachAccessoryPage = async (req, res) => {

    const cube = await allCommandCube.getCubeById(req.params.id)
    let accessories = await allCommandAcc.getAllAcc()

    let test = accessories.slice()

    accessories.forEach((a, i) => {
        a.cubes.forEach((b) => {
            if(b == req.params.id) {
                test.splice(test.indexOf(a) , 1)
            }
        })
    })

    accessories = test

    res.render("accessories/attachAccessory", {cube, accessories})
}

const attachAccToCube = async (req, res) => {
    const cubeId = req.params.id

    await allCommandCube.attachAccessory(cubeId, req.body.accessory)

    res.redirect("/")
}

router.get("/:id", allCommand.checkForToken ,getAttachAccessoryPage)
router.post("/:id", allCommand.checkForToken ,attachAccToCube)


module.exports = router

