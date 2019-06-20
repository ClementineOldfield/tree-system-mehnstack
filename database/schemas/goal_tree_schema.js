const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const GoalSchema = require("./goal_schema");
let categories = ['hfitness', 'education', 'self-care', 'social', 'fun'];

const GoalTreeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: categories,
    required: true
  },
  goals: [ GoalSchema ]
});

module.exports = GoalTreeSchema;