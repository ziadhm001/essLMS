import Axios from "axios"
import { API_SERVER } from "../config/constants.js"

const axios = Axios.create({
    baseURL: `${API_SERVER}`,
    headers: { "Content-Type": "application/json", 'Bypass-Tunnel-Reminder': '121' },
})

axios.interceptors.request.use(function (config) {
   const token = localStorage.getItem("token")
   if (token) {
       config.headers.Authorization = `Bearer ${token}`
    }

   return config
})

axios.interceptors.request.use(
    (config) => {
        return Promise.resolve(config)
    },
    (error) => Promise.reject(error)
)

axios.interceptors.response.use(
    (response) => Promise.resolve(response),
    (error) => {
        return Promise.reject(error)
    }
)

export default axios