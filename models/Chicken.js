const mongoose = require("mongoose");

let chickenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
  },
  weight: {
    type: Number,
    required: true,
  },
  steps: {
    type: Number,
    required: true,
    default: 0,
  },
  isRunning: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Chicken", chickenSchema);
