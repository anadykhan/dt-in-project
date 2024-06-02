import axios from "axios"

const url = 'http://localhost:8000/v1/current'

export const fetchGetCurrentDataClient = () => {
    return axios.get(url, {withCredentials: true})
}