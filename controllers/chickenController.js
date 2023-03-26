const Chicken = require("../models/Chicken");

const asyncHandler = require("express-async-handler");

// @desc Get all Chickens
// @route GET /chicken
// @access Private
const getAllChicken = asyncHandler(async (req, res) => {
  // Get all the chickens
  const chickens = await Chicken.find();
  // If no chicken found throw a 400 error
  if (!chickens) res.status(400).json({ error: "No chicken found" });
  res.status(200).json(chickens);
});

const getChicken = asyncHandler(async (req, res) => {
  // Get the chicken by id
  const id = req.params.id;
  const chicken = await Chicken.findById(id);
  // If no chicken found throw a 400 error
  if (!chicken) res.status(400).json({ error: "No chicken found" });
  res.status(200).json(question);
});

// @desc Create a chicken
// @route POST /chicken
// @access Private
const createChicken = asyncHandler(async (req, res) => {
  const { name, birthday, weight, steps, isRunning } = req.body;
  /* Checking the required atributes */
  if (!name || !weight)
    res
      .status(400)
      .json({ error: "You must give the chicken a name and a weight" });

  const newChicken = { name, birthday, weight, steps, isRunning };
  /* Create the chicken */
  const createdChicken = await Chicken.create(newChicken);

  if (!createdChicken)
    res.status(404).json({ error: "Error creating chicken" });
  res.status(200).json("New chicken with id " + createdChicken._id);
});

// @desc Update a chicken
// @route PATCH /chicken/id
// @access Private
const updateChicken = asyncHandler(async (req, res) => {
  const { name, birthday, weight, steps, isRunning } = req.body;
  const id = req.params.id;

  if (!id) res.status(400).json({ error: "Id required" });

  /* check if chicken exist */
  const chicken = await Chicken.findById(id).exec();
  if (!chicken) {
    res.status(404).json({ error: "Chicken not found" });
  }
  /* Check if no field */
  if (!name && !birthday && !weight && !steps && !isRunning)
    res.status(400).json("Cannot update if no field");
  /* Add the given fields */
  if (name) chicken.name = name;
  if (birthday) chicken.birthday = birthday;
  if (weight) chicken.weight = weight;
  if (steps) chicken.steps = steps;
  if (isRunning) chicken.isRunning = isRunning;

  const updatedChicken = await chicken.save();

  res.status(200).json("Chicken with id " + updatedChicken._id + " updated ");
});

// @desc Delete a Chicken
// @route DELETE /chicken/:id
// @access Private
const deleteChicken = asyncHandler(async (req, res) => {
  const id = req.params.id;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "Question ID Required" });
  }

  // Does the chicken exist to delete?
  const chicken = await Chicken.findById(id).exec();

  if (!chicken) {
    return res
      .status(400)
      .json({ message: "Chicken not with id " + id + " not found" });
  }

  const result = await chicken.deleteOne();

  const reply = `Chicken with id : ${result._id} deleted`;

  res.status(200).json(reply);
});

module.exports = {
  getAllChicken,
  getChicken,
  createChicken,
  deleteChicken,
  updateChicken,
};
