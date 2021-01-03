const callMapQuest = require("./callMapQuest");

const getRoute = () => async (req, res, next) => {
  const pickup = req.params.pickup;
  const dest = req.params.dest;

  if (!pickup || !dest) {res.status(400).send("pickup or destination address not included");return}
  
  
  const result = await apiCall(pickup, dest, 200);
  if (!result) {res.status(500).send("API resource unavailable");return}


  res.status(200).json({route:result.route, distance: result.distance});
}

const stub = async (pickup, dest, steps) => {
  if (pickup === 'APIFAILS' || dest === "APIFAILS") {return undefined}
  const lat1 = Math.random() * 0.25659 + 43.83238
  const lng1 = Math.random() * 1.97784 -81.09151
  const lat2 = Math.random() * 0.25659 + 43.83238
  const lng2 = Math.random() * 1.97784 -81.09151

  const result = []
  for (let i = 0; i<steps; i++) {
    const lat = lat1 + i*(lat2-lat1)/steps;
    const lng = lng1 + i*(lng2-lng1)/steps;
    result.push([lat, lng]);
  };
  return result
}

const apiCall = (pickup, dest) => {
  return callMapQuest.post("/directions/v2/route", {
    locations:[pickup, dest],
    mapState:{
      width: 10000, 
      height: 10000
    }
  }).then(res=>{
    const route = [];
    const flatRoute = res.data.route.shape.shapePoints
    for (let i = 0; i<flatRoute.length; i=i+2) {
      route.push([flatRoute[i], flatRoute[i+1]])
    }

    const distance = res.data.route.distance
    return {route, distance}
  })
}




module.exports = getRoute;