//Causes fetchers js

import axios from 'axios'

const url = 'http://localhost:8000/v1/causes'

export const fetchGetCausesData = () => {
    return axios.get(url)
}

export const fetchGetSingleCauseData = (id) => {
    return axios.get(`${url}/${id}`)
}

export const fetchCreateCauseData = (cause) => {
    return axios.post(url, cause)
}

export const fetchUpdateCauseData = (cause) => {
    return axios.post(`${url}/updatecause`, cause)
}

export const fetchDeleteCausesData = (cause) => {
    return axios.delete(url, { data: cause})
}