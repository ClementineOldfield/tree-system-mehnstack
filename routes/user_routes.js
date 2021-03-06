const express = require("express");
const router = express.Router();

const { celebrate, Joi } = require("celebrate");

const UserController = require("./../controllers/user_controller");
const HabitController = require("./../controllers/habit_controller");
const GoalTreeController = require("./../controllers/goal_tree_controller");
const { authRedirect, authorise } = require("./../middleware/authorisation_middleware");

router.get("/", UserController.index);

router.post("/", celebrate({
  body: {
    email: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required(),
    dob: Joi.date().required(),
    gender: Joi.string()
  }
}), UserController.create);

router.get("/new", authRedirect, UserController.make);

router.get("/:id", UserController.show);

router.delete("/:id", UserController.destroy);

router.get("/:id/edit", UserController.edit);

router.put("/:id/edit", UserController.update);

router.patch("/:id/edit", UserController.update);

router.get("/:id/habits", HabitController.edit);

router.post("/:id/habits/new", HabitController.create);

router.get("/:id/trees", GoalTreeController.edit);

router.post("/:id/trees/new", GoalTreeController.create);

module.exports = router;