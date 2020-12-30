import apiClient from 'api/apiClient'
import { Function } from './types'

export const getActiveSession: Function.getActiveSession = (options = {}) => {
  return apiClient.get('/voting/now', options)
}

export const storeUserVote: Function.storeUserVote = ({ votes }) => {
  return apiClient.post('/voting/now', votes)
}

export const sendCode: Function.sendCode = ({ historyId, code }) => {
  return apiClient.post(`/voting/now/code/${historyId}/verify`, {
    code,
  })
}
