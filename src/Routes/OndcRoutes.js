const express = require("express");
const { connectToOndc } = require("../Database/Collections/collection");
const router = express.Router();

router.get("/orders", async (req, res) => {
  let collection = await connectToOndc();
  const data = await collection.find({}).toArray();
  return res.json({ data: data });
});

module.exports = router;
