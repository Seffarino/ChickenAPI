const express = require("express");
const router = express.Router();
const chickenController = require("../controllers/chickenController");
const runService = require("../services/chicken_run");

router
  .route("/")
  .get(chickenController.getAllChicken)
  .post(chickenController.createChicken);
router
  .route("/:id")
  .get(chickenController.getChicken)
  .delete(chickenController.deleteChicken)
  .patch(chickenController.updateChicken);
router.route("/run").post(runService);
module.exports = router;
