import { useEffect } from 'react'
import { useDispatch, votingSnackbarOpen as snackbarOpen } from 'store'

const key = 'voting-greeted'

interface Props {
  id: number
  message: string
  duration?: number
  delay?: number
}

const useGreeting = ({ id, message, duration = 7000, delay = 0 }: Props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    let data: {
      [id: number]: boolean
    } = JSON.parse(sessionStorage.getItem(key) || '{}')

    let tid = setTimeout(() => {
      if (!data[id]) {
        dispatch(
          snackbarOpen({
            text: message,
            duration: duration,
          })
        )
      }
    }, delay)

    sessionStorage.setItem(key, JSON.stringify({ ...data, [id]: true }))

    return () => {
      clearTimeout(tid)
    }
  }, [delay, dispatch, duration, id, message])
}

export default useGreeting
