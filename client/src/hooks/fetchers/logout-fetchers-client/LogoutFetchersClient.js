import axios from "axios"

const url = 'http://localhost:8000/v1/logout'

export const fetchLogoutDataClient = () => {
    return axios.post(url, {withCredentials: true})
}