const express = require("express");
const { CatchError } = require("../constant");
const { connectToInfo } = require("../Database/Collections/collection");
const { ObjectId } = require("mongodb");
const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     let collection = await connectToInfo();
//     const data = await collection.find({}).toArray();
//     return res.json({ data: data });
//   } catch (error) {
//     CatchError(res, error);
//   }
// });

router.get("/", async (req, res) => {
  try {
    let page = parseInt(req.query.page || 1);
    let collection = await connectToInfo();
    let skipLimit = (page - 1) * 10;
    pipeline = [
      { $skip: skipLimit },
      { $limit: 10 },
      // { $sort: { age: -1 } },
      // { $project: { age: 1, title: 1, _id: 0 } },
      // {
      //   $match: {
      //     $or: [{ age: { $gt: 25 } }, { title: "Testing changesa" }],
      //   },
      // },
    ];
    const data = await collection.aggregate(pipeline).toArray();
    return res.json({
      data: data,
      has_next: data.length == 10,
      page: page + 1,
    });
  } catch (error) {
    CatchError(res, error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let collection = await connectToInfo();
    const filter = { _id: new ObjectId(id) };
    const data = await collection.findOne(filter);
    if (!data) {
      return res.status(404).json({ error: "Document not found" });
    }
    return res.json({ data: data });
  } catch (error) {
    CatchError(res, error);
  }
});

router.post("/", async (req, res) => {
  try {
    let newData = req.body;
    let collection = await connectToInfo();
    await collection.insertOne(newData);
    return res.json({ msg: "Info added successfully" });
  } catch (error) {
    CatchError(res, error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    let collection = await connectToInfo();
    const filter = { _id: new ObjectId(id) };
    const result = await collection.updateOne(filter, { $set: newData });

    if (result.matchedCount === 1) {
      return res.json({ msg: "Info updated successfully" });
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    CatchError(res, error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const newData = req.body;
    const { id } = req.params;
    let collection = await connectToInfo();
    const filter = { _id: new ObjectId(id) };
    const result = await collection.replaceOne(filter, newData);

    if (result.matchedCount === 1) {
      return res.json({ msg: "Info updated successfully" });
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    CatchError(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let collection = await connectToInfo();
    const filter = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(filter);
    if (result.deletedCount === 1) {
      return res.json({ msg: "Info Deleted successfully" });
    } else {
      return res.status(404).json({ error: "Document not found" });
    }
  } catch (error) {
    CatchError(res, error);
  }
});

module.exports = router;
