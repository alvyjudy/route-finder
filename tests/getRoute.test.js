const axios = require("axios");

describe("predictive search", ()=>{
  const SOURCE = `http://localhost:3002/map/route`;

  it("address not included", ()=>{
    expect.assertions(1);
    return axios.get(SOURCE).catch(e=>{
      expect(e.response.status).toBe(400);
    })
  })

  it("mock api failure", ()=>{
    expect.assertions(1);
    const address = encodeURIComponent("APIFAILS");
    return axios.get(`${SOURCE}/${address}/${address}`).catch(e=>{
      expect(e.response.status).toBe(500)
    })
  })

  it("address included", ()=>{
    expect.assertions(2);
    const address1 = encodeURIComponent("1234 Bloor St. W.");
    const address2 = encodeURIComponent("3030 Yonge St.");
    return axios.get(`${SOURCE}/${address1}/${address2}`).then(res=>{
      expect(res.status).toBe(200);
      expect(res.data.route).toBeDefined();
    })
  })



})