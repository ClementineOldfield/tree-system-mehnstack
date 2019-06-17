const express = require("express");
const router = express.Router();
const UserController = require("./../controllers/user_controller");
const HabitController = require("./../controllers/habit_controller");
const GoalTreeController = require("./../controllers/goal_tree_controller");

router.get("/", UserController.index);

router.post("/", UserController.create);

router.get("/new", UserController.make);

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