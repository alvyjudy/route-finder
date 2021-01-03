const express = require("express");
const app = express();

const map = require("./map");

app.use("/map", map);

module.exports = app;