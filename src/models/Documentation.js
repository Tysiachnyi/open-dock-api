const mongoose = require("mongoose");

const DocumentationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("DocumentationSchema", DocumentationSchema);
