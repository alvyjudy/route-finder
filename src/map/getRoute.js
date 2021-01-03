const getRoute = () => (req, res, next) => {
  const pickup = req.params.pickup;
  const dest = req.params.dest;

  if (!pickup || !dest) {res.status(400).send("pickup or destination address not included");return}
  const result = stub(pickup, dest, 200);
  if (!result) {res.status(500).send("API resource unavailable");return}
  res.status(200).json({route:result});
}

const stub = (pickup, dest, steps) => {
  if (pickup === 'APIFAILS' || dest === "APIFAILS") {return undefined}
  const lat1 = Math.random() * 0.25659 + 43.83238
  const lng1 = Math.random() * 1.97784 -81.09151
  const lat2 = Math.random() * 0.25659 + 43.83238
  const lng2 = Math.random() * 1.97784 -81.09151

  const result = []
  for (let i = 0; i<steps; i++) {
    const lat = lat1 + (lat2-lat1)/i;
    const lng = lng1 + (lng2-lng1)/i;
    result.push(lat);
    result.push(lng);
  }
  return result
}



module.exports = getRoute;