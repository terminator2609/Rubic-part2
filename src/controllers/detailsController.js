const express = require("express")
const router = express.Router()
const allCommand = require("../services/detailsService")

const getDetailsPage = async (req, res) => {
   let cube = await allCommand.getDetaisForCube(req.params.id)
   let accessories = cube.accessories
   let listOfAccessory = []

   if (accessories) {
      accessories.forEach((value) => {
         allCommand.getAccessories(value)
            .then((accessory) => {
               listOfAccessory.push(accessory)
            })
      })
   }

   res.render("details", {
      cube,
      listOfAccessory
   })
}

router.get("/:id", getDetailsPage)

module.exports = router