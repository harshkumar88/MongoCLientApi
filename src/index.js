const express = require("express");
const userRoutes = require("./Routes/UserRoutes");
const articleRoutes = require("./Routes/ArticleRoutes");
const ondcRoutes = require("./Routes/OndcRoutes");
const feedRoutes = require("./Routes/FeedRoutes");
const infoRoutes = require("./Routes/InfoRoutes");
const app = express();
const port = process.env.PORT || 5000;
// require("./Database/connection");

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
