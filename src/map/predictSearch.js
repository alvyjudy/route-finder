const callMapQuest = require("./callMapQuest");

const predictSearchStub = () => async (req, res, next) => {
  const address = req.params.address;
  if (!address) {res.status(400).send("Address not included in request"); return}

  const addresses = await apiCall(address);
  if (!addresses) {res.status(500).send("API resource unavailable");return}

  res.status(200).json({addresses})
}

const stub = async (address) => {
  if (address === 'APIFAILS') {return undefined}
  const results = [];
  for (let i = 0; i < 10; i++) {
    results.push(`${address}, City ${i}, L${i}M 3P${i}`)
  }
  return results
}

const apiCall = async (address) => {
  if (address === 'APIFAILS') {return undefined}

  const addresses = await callMapQuest.get("/search/v3/prediction", {
    params:{
      q: address,
      collection: "address,poi",
      location:"-79.3832,43.6532"
    }
  }).then(res=>{
    return res.data.results.map(entry=>entry.displayString)
  }).catch(e=>{
    console.log("Error calling api resource predict search", e)
  })

  return addresses
}

module.exports = predictSearchStub;