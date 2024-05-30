import axios from "axios"

const url = 'http://localhost:8000/v1/registration'

export const fetchCreateRegistrationDataClient = (user) => {
    return axios.post(url, user)
}

