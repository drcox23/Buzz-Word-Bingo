const express = require("express");
const app = express();
const bp = require("body-parser");

app.use(bp.urlencoded({ extended: true }));
