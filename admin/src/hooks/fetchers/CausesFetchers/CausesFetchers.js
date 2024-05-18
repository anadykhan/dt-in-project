//Causes fetchers js

import axios from 'axios'

const url = 'http://localhost:8000/v1/causes'

export const fetchGetCausesData = () => {
    return axios.get(url)
}

export const fetchGetSingleCauseData = () => {
    console.log('get single cause data')
}

export const fetchCreateCauseData = (cause) => {
    return axios.post(url, cause)
}

export const fetchUpdateCauseData = () => {
    console.log('edit causes data')
}

export const fetchDeleteCausesData = () => {
    console.log('delete causes data')
}