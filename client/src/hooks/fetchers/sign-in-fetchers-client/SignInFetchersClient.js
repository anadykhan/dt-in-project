import axios from "axios"

const url = 'http://localhost:8000/v1/login'

export const fetchCreateSignInDataClient = (user) => {
    return axios.post(url, user)
}

