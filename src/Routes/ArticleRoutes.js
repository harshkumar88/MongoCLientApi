const express = require("express");
const { Article, User } = require("../Database/model");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findById(id).populate("userDetails").exec();
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  const { email, ...data } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.json({
        error: "Failed to save article no user found with this email",
      });
    }
    if (user) {
      data.userDetails = user._id;
    }
    const article = new Article(data);
    const response = await article.save();
    if (response) {
      res.json(article);
    } else {
      res.json({ error: "Failed to save article" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
