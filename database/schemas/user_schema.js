const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = require("./habit_schema");

const UserSchema = new Schema({
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
  habits: [ HabitSchema ]
});

module.exports = UserSchema;