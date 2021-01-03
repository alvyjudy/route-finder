import axios from 'axios';

const ajax = axios.create({
  timeout:1000,
  headers: {
    "Content-Type":"application/json"
  }
})

if (process.env.NODE_ENV === "development") {
  ajax.interceptors.request.use((config)=>{
    console.log("AJAX request: ",config)
    return config
  })
  
}

export default ajax;