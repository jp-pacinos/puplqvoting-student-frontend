import apiClient from 'api/apiClient'
import { Function } from './types'

export const authUrl = '/auth/login'

export const login: Function.login = ({ user, options = {} }) => {
  return apiClient.post(`${authUrl}/student`, user, options)
}
