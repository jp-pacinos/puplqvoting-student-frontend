import React from 'react'
import { Helmet } from 'react-helmet-async'

import StudentAuth from './StudentAuth'

interface Props {
  //
}

const StudentAuthMain: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Student Login</title>
      </Helmet>

      <StudentAuth />
    </>
  )
}

export default StudentAuthMain
