import React, { lazy, Suspense } from 'react'
import { PagePreloader } from 'components'
import { Helmet } from 'react-helmet-async'

const VotingCompleted = lazy(() => import('./VotingCompleted'))

interface Props {}

const VotingCompletedMain: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Vote Completed</title>
      </Helmet>

      <Suspense fallback={<PagePreloader />}>
        <VotingCompleted />
      </Suspense>
    </>
  )
}

export default VotingCompletedMain
