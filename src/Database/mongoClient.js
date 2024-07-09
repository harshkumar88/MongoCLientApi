// db.js
const { MongoClient } = require("mongodb");

const mongoClientUri =
  // "mongodb+srv://otipy:otipy123@stage-mongo.crsqm.mongodb.net/";
  "mongodb+srv://HarshBansal:HarshBansal88@cluster0.ffsv2.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(mongoClientUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB(key) {
  try {
    await client.connect();
    console.log("Connected to MongoClient");
    return client.db(key); // Set the database instance
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connectToMongoDB };
