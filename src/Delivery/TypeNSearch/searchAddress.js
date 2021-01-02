export default (addr) => {
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