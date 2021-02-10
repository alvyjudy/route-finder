const app = require("./src/index.js");


if (process.env.NODE_ENV === "development") {
  app.listen(3002, ()=>{console.log("App listening on port 3002")})
} else {
  app.listen(process.env.PORT, ()=>{console.log("App listening on port " + process.env.PORT)})
}
