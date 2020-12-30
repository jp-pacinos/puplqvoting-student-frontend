import axios from 'axios'

// const baseURL = 'http://127.0.0.1:8000/api'
const baseURL = '/api'

const apiClient = axios.create({
  baseURL: baseURL,
})

const authToken = sessionStorage.getItem('auth-token')

apiClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`

export default apiClient
