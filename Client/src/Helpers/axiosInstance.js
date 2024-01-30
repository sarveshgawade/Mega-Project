import axios from 'axios'

const BASE_URL = 'http://localhost:7006/api/v1'

const axiosInstance = axios.create()

axiosInstance.defaults.baseURL = BASE_URL
axios.defaults.withCredentials = true

export default axiosInstance