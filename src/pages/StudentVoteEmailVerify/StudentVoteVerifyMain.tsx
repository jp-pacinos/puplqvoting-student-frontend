import React, { useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

import { useDispatch, removeToken } from 'store'
import { PagePreloader } from 'components'

const StudentVoteVerify = lazy(() => import('./StudentVoteVerify'))

interface Props {
  //
}

const StudentVoteVerifyMain: React.FC<Props> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(removeToken())
  }, [dispatch])

  return (
    <>
      <Helmet>
        <title>Verify your vote</title>
      </Helmet>

      <Suspense fallback={<PagePreloader />}>
        <StudentVoteVerify />
      </Suspense>
    </>
  )
}

export default StudentVoteVerifyMain
