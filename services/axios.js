import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://api.folhavitoria.com.br/content/v2"
})

export { axiosInstance }