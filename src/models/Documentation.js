const mongoose = require("mongoose");

const DocumentationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("DocumentationSchema", DocumentationSchema);
