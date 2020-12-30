import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { selectUser, useSelector } from 'store'
import { Response } from 'api/voting'
import { Button, Spacer } from 'components/Core'

interface Props {
  //
}

const StudentVoteVerify: React.FC<Props> = () => {
  const user = useSelector(selectUser)
  const location = useLocation<Response.Success.storeUserVote>()

  let firstname = user.firstname ? user.firstname : 'Hello'
  let resultLink = location && location.state ? location.state.resultLink : ''

  return (
    <>
      <h2>{firstname}, almost there...</h2>
      <p>
        Your vote has been saved but it requires to be validated by our system in order to
        be counted. We have send the <b>confirmation link using the email associated</b>{' '}
        to your account to procced.
      </p>

      <Spacer level={3} />

      {resultLink.length !== 0 && (
        <p>
          If you have <b>problem on validating</b> your email. You can download your{' '}
          <a href={resultLink} target="_blank" rel="noopener noreferrer">
            vote results here
          </a>{' '}
          for manual counting or vote again by returning home.
        </p>
      )}

      <Spacer level={3} />

      <Link to="/">
        <Button type="submit" color="primary" size="md">
          Return home
        </Button>
      </Link>
    </>
  )
}

export default StudentVoteVerify
