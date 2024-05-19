import axios from 'axios'

const url = 'http://localhost:8000/v1/events'

export const fetchGetEventsData = () => {
    return axios.get(url)
}

export const fetchGetSingleEventData = (id) => {
    return axios.get(`${url}/${id}`)
}

export const fetchCreateEventData = (event) => {
    return axios.post(url, event)
}

export const fetchUpdateEventData = (event) => {
    return axios.post(`${url}/updateevent`, event)
}

export const fetchDeleteEventData = (event) => {
    return axios.delete(url, { data: event})
}
