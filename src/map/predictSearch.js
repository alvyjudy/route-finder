const predictSearchStub = () => (req, res, next) => {
  const address = req.params.address;
  if (!address) {res.status(400).send("Address not included in request"); return}

  const addresses = stub(address);
  if (!addresses) {res.status(500).send("API resource unavailable");return}

  res.status(200).json({addresses})
}

const stub = (address) => {
  if (address === 'APIFAILS') {return undefined}
  const results = [];
  for (let i = 0; i < 10; i++) {
    results.push(`${address}, City ${i}, L${i}M 3P${i}`)
  }
  return results
}

module.exports = predictSearchStub;