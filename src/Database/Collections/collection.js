const { connectToMongoDB } = require("../mongoClient");

const connectToOndc = async () => {
  let db = await connectToMongoDB("ondc");
  const collection = db.collection("order");
  return collection;
};

const connectTofeed = async () => {
  let db = await connectToMongoDB("feed");
  const collection = db.collection("feed");
  return collection;
};

const connectToInfo = async () => {
  let db = await connectToMongoDB("info");
  const collection = db.collection("info");
  return collection;
};

module.exports = { connectToOndc, connectTofeed, connectToInfo };
