const asyncHandler = require("express-async-handler");
const Chicken = require("../models/Chicken");

const runningService = asyncHandler(async (req, res) => {
  /* Update all chickens with isRunning of true */
  Chicken.updateMany({ isRunning: true }, { $inc: { steps: 1 } }).exec();
  res
    .status(200)
    .json("The chickens with isRunning = true are running (adding 1 step)");
});

module.exports = runningService;
