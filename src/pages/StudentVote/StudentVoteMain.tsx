import React from 'react'
import { Helmet } from 'react-helmet-async'

import StudentVoteWithFether from './StudentVoteWithFetcher'

interface Props {
  //
}

const StudentVoteMain: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Vote</title>
      </Helmet>

      <StudentVoteWithFether />
    </>
  )
}

export default StudentVoteMain
