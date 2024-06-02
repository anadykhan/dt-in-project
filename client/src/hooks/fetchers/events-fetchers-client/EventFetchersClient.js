import axios from 'axios'

const url = 'http://localhost:8000/v1/events'

export const fetchGetEventsDataClient = () => {
    return axios.get(url)
}

export const fetchGetSingleEventDataClient = (id) => {
    return axios.get(`${url}/${id}`, {withCredentials: true})
}

export const fetchCreateEventDataClient = (event) => {
    return axios.post(url, event)
}

export const fetchUpdateEventDataClient = (event) => {
    return axios.post(`${url}/updateevent`, event)
}

export const fetchDeleteEventDataClient = (event) => {
    return axios.delete(url, { data: event})
}
