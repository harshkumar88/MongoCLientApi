const mongoose = require("mongoose");
const UserSchema = require("./Schema/UserSchema");
const ArticleSchema = require("./Schema/ArticleSchema");

//Models
const User = mongoose.model("User", UserSchema);
const Article = mongoose.model("Article", ArticleSchema);

//exports
module.exports = { User, Article };
