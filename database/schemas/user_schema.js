const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: ""
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'non binary'],
    default: 'non binary'
  }
});

module.exports = UserSchema;