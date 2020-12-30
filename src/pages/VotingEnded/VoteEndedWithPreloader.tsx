import React, { Suspense, lazy } from 'react'
import Preloader from 'components/PagePreloader'

const VoteEnded = lazy(() => import('./VotingEnded'))

interface Props {}

const VoteEndedWithPreloader: React.FC<Props> = (props) => {
  return (
    <Suspense fallback={<Preloader />}>
      <VoteEnded {...props} />
    </Suspense>
  )
}

export default VoteEndedWithPreloader
