//Causes fetchers js

import axios from 'axios'

const url = 'http://localhost:8000/v1/causes'

export const fetchGetCausesDataClient = () => {
    return axios.get(url, {withCredentials: true})
}

export const fetchGetSingleCauseDataClient = (id) => {
    return axios.get(`${url}/${id}`, {withCredentials: true})
}

export const fetchCreateCauseDataClient = (cause) => {
    return axios.post(url, cause)
}

export const fetchUpdateCauseDataClient = (cause) => {
    return axios.post(`${url}/updatecause`, cause)
}

export const fetchDeleteCausesDataClient = (cause) => {
    return axios.delete(url, { data: cause})
}