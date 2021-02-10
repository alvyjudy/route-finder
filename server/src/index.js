const express = require("express");
const app = express();

const map = require("./map");

app.use("/assets", express.static("assets"));

app.use("/api", map);

app.use(express.static("dist"));

module.exports = app;
