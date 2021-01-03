const getGeocode = () => (req, res, next) => {
  const address = req.params.address;
  if (!address) {res.status(400).send("Address not included in request"); return}

  const geocode = stub(address);
  if (!geocode) {res.status(500).send("API resource unavailable");return}

  res.status(200).json(geocode)
}

const stub = address => {
  if (address === 'APIFAILS') {return undefined}
  const lat = Math.random() * 0.25659 + 43.83238
  const lng = Math.random() * 1.97784 -81.09151
  return {lat, lng}
}

module.exports = getGeocode