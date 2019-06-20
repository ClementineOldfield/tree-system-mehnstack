const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = require("./log_schema");

const HabitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['hfitness', 'education', 'self-care', 'social'],
    required: true
  },
  logs: [ LogSchema ]
});

module.exports = HabitSchema;