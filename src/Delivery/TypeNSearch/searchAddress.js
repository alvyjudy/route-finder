import ajax from "../../ajax";

const searchAddressStub = (addr) => {
  return new Promise((resolve, reject)=>{
    if (addr === "false") {
      setTimeout(()=>{resolve(["Address not found"])}, 200)
    } else {
      setTimeout(()=>{resolve(
        [`${addr}, ON`, `${addr}, QB`, `${addr}, NS`, `${addr}, BC`, `${addr}, NL`, `${addr}, MB`]
      )}, 200)
    }
  })
}

const searchAddress = (addr) => {
  const addrEncoded = encodeURIComponent(addr);
  return ajax(`/api/map/predict-search/${addrEncoded}`).then(res=>{
    return res.data.results
  })
}

export default searchAddress;