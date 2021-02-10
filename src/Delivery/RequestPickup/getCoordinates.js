import ajax from "../../ajax";

const getCoordStub = (address) => {
  return new Promise((resolve, reject)=>{
    const lat = Math.random() * 0.25659 + 43.83238
    const lng = Math.random() * 1.97784 -81.09151
    resolve([lat, lng])
  })
}

const getCoordinates = address => {
  const addrEncoded = encodeURIComponent(address);
  return ajax.get(`/api/map/geocode/${addrEncoded}`).then(res=>{
    return [res.data.lat, res.data.lng]
  })
}

export default getCoordinates