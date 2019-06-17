const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GoalSchema = require("./goal_schema");

const GoalTreeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['hfitness', 'education', 'self-care', 'social'],
    required: true
  },
  goals: [ GoalSchema ]
});

module.exports = GoalTreeSchema;