const express = require("express");
const { connectTofeed } = require("../Database/Collections/collection");
const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await connectTofeed();
  console.log("proccess");
  const data = await collection
    .find({ feed_type: 1, status: 1, pricing_zone_id: 1 })
    .toArray();
  return res.json({ data: data });
});

module.exports = router;
