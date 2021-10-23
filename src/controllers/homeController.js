const express = require("express")
const newCube = require("../models/newCube")

const router = express.Router()

let getHomePage = (req, res) => {
    let getAllCubes = {}
    newCube.find({})
        .then((values) => {
            values.forEach((a) => {
                getAllCubes[a.id] = {
                    id: a.id,
                    name: a.name,
                    description: a.description,
                    imageUrl: a.imageUrl,
                    difficultyLevel: a.difficultyLevel
                }
            })
        })

    res.render("index", {
        getAllCubes
    })
}

router.get("/", getHomePage)

module.exports = router