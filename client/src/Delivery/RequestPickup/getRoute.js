import ajax from "../../ajax";

const getRoute = (pickup, dest) => {
  const encodedPickup = encodeURIComponent(pickup);
  const encodedDest = encodeURIComponent(dest);
  return ajax(`/api/map/route/${encodedPickup}/${encodedDest}`).then(res=>{
    return {route: res.data.route, distance: res.data.distance}
  })
}

export default getRoute;