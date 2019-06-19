const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = GoalSchema;