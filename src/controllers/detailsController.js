const express = require("express")
const router = express.Router()
const allCommand = require("../services/detailsService")

const getDetailsPage = async (req, res) => {
   let cube = await allCommand.getDetaisForCube(req.params.id)

   let listOfAccessory = Object.values(await allCommand.getAccessories(req.params.id))[6]

   res.render("details", {
      cube,
      listOfAccessory
   })
}

router.get("/:id", getDetailsPage)

module.exports = router