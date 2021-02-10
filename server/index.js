const express = require("express");
const app = express();
const path = require("path");

const map = require("./src/map");

app.use("/api/map", map);
app.use("/assets", express.static("assets"));
app.use("/assets/*", (req, res) => {
  res.status(404).send("Asset not found");
});
app.use(express.static("dist"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

if (process.env.NODE_ENV === "development") {
  app.listen(3002, () => {
    console.log("App listening on port 3002");
  });
} else {
  app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
  });
}
