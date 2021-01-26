import axios from 'axios'

export const baseURL = process.env.REACT_APP_API_BASE_URL || ''
export const prefix = process.env.REACT_APP_API_PREFIX || ''

const apiClient = axios.create({
  baseURL: `${baseURL}${prefix.indexOf('/') === 0 ? prefix : `/${prefix}`}`,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
  },
})

const authToken = sessionStorage.getItem('auth-token') || null
if (authToken) {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${authToken}`
}

export default apiClient
