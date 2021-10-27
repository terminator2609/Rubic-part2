const express = require("express")
const router = express.Router({mergeParams: true})
const allCommand = require("../services/detailsService")
const editController = require("./editController")
const deleteController = require("./deleteController")

router.use("/:id", editController)
router.use("/:id", deleteController)

const getDetailsPage = async (req, res) => {
   let cube = await allCommand.getDetaisForCube(req.params.id)

   let listOfAccessory = Object.values(await allCommand.getAccessories(req.params.id))[5]

   res.render("details", {
      cube,
      listOfAccessory
   })
}


router.get("/:id", getDetailsPage)



module.exports = router