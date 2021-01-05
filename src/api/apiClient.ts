import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api' // separate
// const baseURL = '/api' // in server

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
  },
})

const authToken = sessionStorage.getItem('auth-token')
if (authToken) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
}

export default apiClient
