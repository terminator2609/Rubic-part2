const express = require("express")
const cube = require("../models/newCube")
const router = express.Router()

router.get("/:id", (req, res) => {
    cube.findById(req.params.id)
        .then((values) => {
            res.render("details", {
                name: values.name,
                description: values.description,
                imageUrl: values.imageUrl,
                difficultyLevel: values.difficultyLevel
            })
        })
})

module.exports = router