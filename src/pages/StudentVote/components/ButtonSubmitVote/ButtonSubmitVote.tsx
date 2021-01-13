import React, { useState } from 'react'

import { storeUserVote, Function, Response } from 'api/voting'
import {
  useSelector,
  selectVotingSelected,
  selectVotingPositionEntities,
  useDispatch,
  votingSnackbarOpen as snackbarOpen,
  votingSnackbarClose as snackbarClose,
} from 'store'
import { Button } from 'components/Core'

interface Props {
  onSubmitSuccess: (responseData: Response.Success.storeUserVote) => void
}

const ButtonSubmitVote: React.FC<Props> = ({ onSubmitSuccess: submitSuccess }) => {
  const selected = useSelector(selectVotingSelected)
  const positions = useSelector(selectVotingPositionEntities)

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)

  const handleVoteSubmit = async () => {
    let votes: Function.storeUserVoteParam['votes'] = {}

    for (let pid in positions) {
      let candidateIds = []

      /**
       * add selected candidate
       */
      for (let cid in selected[pid]) {
        if (!selected[pid][cid]) continue
        candidateIds.push(cid) // push only selected
      }

      /**
       * validation, may return if there is an error
       */
      if (candidateIds.length !== positions[pid].choose_max_count) {
        let message = ''
        let positionName = positions[pid].name

        if (positions[pid].choose_max_count === 1) {
          message += `Please choose one candidate for ${positionName.toLowerCase()}.`
        } else {
          message += `Please choose all ${
            positions[pid].choose_max_count
          } candidates for ${positionName.toLowerCase()}, you already choose ${
            candidateIds.length
          }.`
        }

        dispatch(
          snackbarOpen({
            text: message,
            duration: 7000,
          })
        )
        return
      }

      votes[positions[pid].keyName] = candidateIds
    }

    setLoading(true)
    dispatch(
      snackbarOpen({
        text: 'Submitting, please wait...',
        duration: 15000,
      })
    )

    try {
      const response = await storeUserVote({ votes })
      submitSuccess(response.data)
      dispatch(snackbarClose())
      return
    } catch (e) {
      let errMessage = 'Something went wrong. Please refresh the page and try again.'

      if (e.response) {
        let status = e.response.status
        let allowed = status === 401 || status === 403

        if (allowed) {
          errMessage = e.response.data.message
        }
      }

      dispatch(
        snackbarOpen({
          text: errMessage,
          duration: 15000,
        })
      )
    }

    setLoading(false)
  }

  return (
    <Button color="primary" size="lg" onClick={handleVoteSubmit} disabled={loading}>
      Submit my vote
    </Button>
  )
}

export default ButtonSubmitVote
