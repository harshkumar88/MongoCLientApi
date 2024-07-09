const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  userDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Ensure "User" matches the model name defined in mongoose.model("User
  },
});

module.exports = ArticleSchema;
