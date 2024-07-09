const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://HarshBansal:HarshBansal88@cluster0.ffsv2.mongodb.net/Practice?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
