import React, { useEffect, useState, memo } from 'react'
import axios from 'axios'

import { useDispatch, setInitialVotingData } from 'store'

import Preloader from './Preloader'
import StudentVote from './StudentVote'
import getActiveSession from './getActiveSession'

interface Props {
  //
}

const StudentVoteWithFethcer: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // fetch initial data
  useEffect(() => {
    let source = axios.CancelToken.source()

    getActiveSession({ cancelToken: source.token })
      .then((data) => {
        dispatch(setInitialVotingData(data)) // set the data to store...
        setLoading(false)
      })
      .catch(() => {})

    return () => {
      source.cancel()
    }
  }, [dispatch])

  return <>{!loading ? <StudentVote /> : <Preloader />}</>
}

export default memo(StudentVoteWithFethcer)
