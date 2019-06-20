const express = require("express");
const router = express.Router();
const HabitController = require("../controllers/habit_controller");
const { authRedirect, authorise } = require("./../middleware/authorisation_middleware");

router.get("/daily", HabitController.daily);

module.exports = router;