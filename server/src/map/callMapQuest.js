const axios = require("axios");

const instance = axios.create({
  baseURL: "http://www.mapquestapi.com",
  params: {
    key:process.env.MAP_QUEST_API_KEY
  }
})

if (process.env.NODE_ENV === "development") {
  instance.interceptors.request.use(config=>{
    console.log("ajax request:", config)
    return config
  })
}

module.exports = instance