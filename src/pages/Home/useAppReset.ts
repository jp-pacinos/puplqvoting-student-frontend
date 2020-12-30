import { useEffect } from 'react'
import { apiClient } from 'api'
import { useDispatch, removeToken } from 'store'

const useAppReset = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(removeToken())
  }, [dispatch])

  useEffect(() => {
    // reset
    sessionStorage.removeItem('auth-token')
    sessionStorage.removeItem('auth-user')
    sessionStorage.removeItem('voting-isVoted')
    sessionStorage.removeItem('voting-isCompleted')
    sessionStorage.removeItem('voting-greeted')
    // sessionStorage.removeItem('voting-data')
    apiClient.defaults.headers.common['Authorization'] = null
  }, [])
}

export default useAppReset
