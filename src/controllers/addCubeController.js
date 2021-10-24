const express = require("express")
const newCube = require("../models/newCube")

const router = express.Router()

const getAddCubePage = (req, res) => {
    res.render("create")
}

const postDataToDb = (req, res) => {
    newCube.create({
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        difficultyLevel: req.body.difficultyLevel
    })
    .catch((error) => {
       if(error) {
           res.send(error.errors.imageUrl.message).end()
       } else {
            res.redirect("/")
       }
    })
}

router.get("/newCube", getAddCubePage)
router.post("/newCube", postDataToDb)

module.exports = router