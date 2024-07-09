const express = require("express");
const { User } = require("../Database/model");
const { CatchError } = require("../constant");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    CatchError(res, error);
  }
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    const response = await user.save();

    if (response) {
      res.json(user);
    } else {
      res.status(500).json({ error: "Failed to save user" });
    }
  } catch (error) {
    CatchError(res, error);
  }
});

module.exports = router;
