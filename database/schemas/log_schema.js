const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogSchema = new Schema({
  date: {
    type: String,
    required: true
  }
});

module.exports = LogSchema;