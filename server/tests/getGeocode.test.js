const axios = require("axios");

describe("predictive search", ()=>{
  const SOURCE = `http://localhost:3002/map/geocode`;

  it("address not included", ()=>{
    expect.assertions(1);
    return axios.get(SOURCE).catch(e=>{
      expect(e.response.status).toBe(400);
    })
  })

  it("mock api failure", ()=>{
    expect.assertions(1);
    const address = encodeURIComponent("APIFAILS");
    return axios.get(`${SOURCE}/${address}`).catch(e=>{
      expect(e.response.status).toBe(500)
    })
  })

  it("address included", ()=>{
    expect.assertions(3);
    const address = encodeURIComponent("1234 Bloor St. W.");
    return axios.get(`${SOURCE}/${address}`).then(res=>{
      expect(res.status).toBe(200);
      expect(res.data.lat).toBeDefined();
      expect(res.data.lng).toBeDefined();
    })
  })



})