const { Schema } = require("mongoose");

const HabitSchema = require("./habit_schema");
const GoalTreeSchema = require("./goal_tree_schema");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    bcrypt: true
  },
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non binary'],
    default: 'non binary'
  },
  habits: [ HabitSchema ],
  goalTrees: [ GoalTreeSchema ]
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = UserSchema;