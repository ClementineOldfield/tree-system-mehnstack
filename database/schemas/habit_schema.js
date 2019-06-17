const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HabitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Health & Fitness', 'Education', 'Self-Care', 'Social'],
    required: true
  }
});

module.exports = HabitSchema;