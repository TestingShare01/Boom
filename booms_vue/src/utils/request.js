import axios from "axios"

// axios.get("/db.json").then(res=>{
//     console.log(res.data)
// })

const request = axios.create({
    baseURL:"/",
    timeout:5000
})

export default request