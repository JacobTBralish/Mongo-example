const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50
  },
  body: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("todo", todoSchema);
