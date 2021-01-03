const axios = require("axios");

describe("predictive search", ()=>{
  const SOURCE = `http://localhost:3002/map/predict-search`;

  it("address not included", ()=>{
    expect.assertions(1);
    return axios.get(SOURCE).catch(e=>{
      expect(e.response.status).toBe(400);
    })
  })

  it("address included", ()=>{
    expect.assertions(1);
    const address = encodeURIComponent("1234 Bloor St. W.");
    return axios.get(`${SOURCE}/${address}`).then(res=>{
      expect(res.status).toBe(200);
    })
  })

  it("mock api failure", ()=>{
    expect.assertions(1);
    const address = encodeURIComponent("APIFAILS");
    return axios.get(`${SOURCE}/${address}`).catch(e=>{
      expect(e.response.status).toBe(500)
      
    })
  })
})