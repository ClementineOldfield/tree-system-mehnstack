const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['hfitness', 'education', 'self-care', 'social'],
    required: true
  }
});

module.exports = HabitSchema;