import ajax from "../../ajax";

const getRoute = (pickup, dest) => {
  const encodedPickup = encodeURIComponent(pickup);
  const encodedDest = encodeURIComponent(dest);
  return ajax(`/api/map/route/${encodedPickup}/${encodedDest}`).then(res=>{
    return res.data.route
  })
}

export default getRoute;