export default (address) => {
  return new Promise((resolve, reject)=>{
    const lat = Math.random() * 20
    const lng = Math.random() * 20
    resolve([lat, lng])
  })
}