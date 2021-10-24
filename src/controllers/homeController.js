const express = require("express")
const allMethods = require("../services/homePageService")

const router = express.Router()

let getHomePage = async (req, res) => {
    // let getAllCubes = {}
    let getAllCubes = await allMethods.getCubesfromDb()

    res.render("index", {
        getAllCubes
    })
}

router.get("/", getHomePage)

module.exports = router