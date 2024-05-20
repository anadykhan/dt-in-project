import axios from 'axios'

const url = 'http://localhost:8000/v1/users'

export const fetchGetUsersData = () => {
    return axios.get(url)
}

export const fetchGetSingleUserData = (id) => {
    return axios.get(`${url}/${id}`)
}

export const fetchCreateUserData = (user) => {
    return axios.post(url, user)
}

export const fetchUpdateUserData = (user) => {
    return axios.post(`${url}/updateuser`, user)
}

export const fetchDeleteUserData = (user) => {
    return axios.delete(url, { data: user})
}
