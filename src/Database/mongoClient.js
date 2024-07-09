// db.js
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();
const mongoClientUri = process.env.CONNECTION_URL;
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
