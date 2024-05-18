//Causes fetchers js

import axios from 'axios'

export const fetchGetCausesData = () => {
    return axios.get('http://localhost:8000/v1/causes')
}

export const fetchGetSingleCauseData = () => {
    console.log('get single cause data')
}

export const fetchUpdateCauseData = () => {
    console.log('edit causes data')
}

export const fetchDeleteCausesData = () => {
    console.log('delete causes data')
}