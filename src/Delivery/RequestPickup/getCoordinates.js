export default (address) => {
  return new Promise((resolve, reject)=>{
    const lat = Math.random() * 0.25659 + 43.83238
    const lng = Math.random() * 1.97784 -81.09151
    resolve([lat, lng])
  })
}