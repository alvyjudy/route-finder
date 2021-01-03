const express = require("express");
const router = express.Router();

const predictSearch = require("./predictSearch");
const getGeocode = require("./getGeocode");
const getRoute = require("./getRoute");


router.get("/predict-search(/:address)?",
  //return an array of addresses
  predictSearch()
)

router.get("/geocode(/:address)?",
  //return the geocode for the address
  getGeocode()
)

router.get("/route(/:pickup/:dest)?",
  getRoute()
)

module.exports = router;