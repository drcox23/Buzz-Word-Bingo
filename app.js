const express = require("express");
const app = express();
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));

const buzzwords = [
  {
    buzzwords: String,
    points: Number
  }
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log("Application is CONNECTED");
});
