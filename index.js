const express = require("express");
const userRoutes = require("./src/Routes/UserRoutes");
const articleRoutes = require("./src/Routes/ArticleRoutes");
const ondcRoutes = require("./src/Routes/OndcRoutes");
const feedRoutes = require("./src/Routes/FeedRoutes");
const infoRoutes = require("./src/Routes/InfoRoutes");
const app = express();
const port = process.env.PORT || 5000;
require("./src/Database/connection");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/user", userRoutes);
app.use("/article", articleRoutes);
app.use("/ondc", ondcRoutes);
app.use("/feed", feedRoutes);
app.use("/info", infoRoutes);
app.listen(port, (req, res) => {
  console.log("connection success");
});
