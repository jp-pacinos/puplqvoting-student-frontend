import React, { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'

import { PagePreloader } from 'components'

const StudentVoteVerify = lazy(() => import('./StudentVoteVerify'))

interface Props {
  //
}

const StudentVoteVerifyMain: React.FC<Props> = () => {
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
