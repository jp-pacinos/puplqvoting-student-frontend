import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { useSelector, selectUser } from 'store'
import { Response } from 'api/voting'
import { Button, Spacer } from 'components/Core'

const noMargin = { margin: 0 }

interface Props {}

const VotingCompleted: React.FC<Props> = () => {
  const user = useSelector(selectUser)
  const location = useLocation<Response.Success.storeUserVote>()

  let firstname = user.firstname ? user.firstname : 'User'
  let resultLink = location && location.state ? location.state.resultLink : ''

  return (
    <>
      <h1>PUPLCSC Voting System</h1>
      <h2 style={noMargin}>Congratulations {firstname}!</h2>
      <p style={noMargin}>
        Your vote has been validated and counted. We wish you a Happy Voting!
      </p>

      <div style={{ margin: '2.5em auto' }}></div>

      {resultLink.length !== 0 && (
        <>
          <h3 style={noMargin}>Manual counting of votes</h3>
          <p style={noMargin}>
            Please download your vote copy for manual counting of votes.
          </p>
          <a href={resultLink} target="_blank" rel="noopener noreferrer">
            Download Vote Results
          </a>
        </>
      )}

      <Spacer level={4} />

      <Link to="/">
        <Button type="submit" color="primary" size="md">
          Return home
        </Button>
      </Link>
    </>
  )
}

export default VotingCompleted
