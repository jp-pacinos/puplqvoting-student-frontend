import React, { useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { Response } from 'api/voting'
import {
  useSelector,
  selectVotingPositionIds,
  useDispatch,
  makeVoted,
  makeVoteCompleted,
} from 'store'

import { Spacer } from 'components/Core'
import { ButtonSubmitVote, CandidatesGroup, Snackbar } from './components'
import useGreeting from './useGreeting'
import styles from './StudentVote.module.css'

interface Props {
  //
}

const StudentVote: React.FC<Props> = () => {
  useGreeting({
    id: 1,
    message: 'Welcome! To select a candidate hover and click thier picture.',
    duration: 7000,
    delay: 200,
  })
  useGreeting({
    id: 2,
    message: 'Choose only the candidates that you like. Happy Voting!',
    duration: 7000,
    delay: 7500,
  })

  const history = useHistory()

  const dispatch = useDispatch()

  const handleVoteSubmit = useCallback(
    (data: Response.Success.storeUserVote) => {
      dispatch(makeVoted())

      let redirectTo = '/auth'

      switch (data.verification_type) {
        case 'open': {
          redirectTo = '/vote/completed'
          dispatch(makeVoteCompleted())
          break
        }
        case 'code': {
          redirectTo = '/vote/verify/code'
          break
        }
        case 'email': {
          redirectTo = '/vote/verify/email'
          break
        }
      }

      history.push(redirectTo, data)
    },
    [dispatch, history]
  )

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Choose your Candidates!</h1>

        <CandidateGroupLists />

        <Spacer level={7} />

        <ButtonSubmitVote onSubmitSuccess={handleVoteSubmit} />

        <Spacer level={3} />

        <p>
          <b>Note:</b> You cannot go back when you procced to submit!
        </p>
      </div>

      <Snackbar />
    </>
  )
}

export default StudentVote

//

const CandidateGroupLists: React.FC<{}> = () => {
  const positionIds = useSelector(selectVotingPositionIds)
  const lists = useMemo(
    () => positionIds.map((id) => <CandidatesGroup key={id} positionId={id} />),
    [positionIds]
  )
  return <>{lists}</>
}
