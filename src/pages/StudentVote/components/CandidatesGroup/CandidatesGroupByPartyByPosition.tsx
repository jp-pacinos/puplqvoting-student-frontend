import React, { useCallback, useMemo } from 'react'

import {
  useSelector,
  useDispatch,
  selectSelectedByPosition,
  selectVotingPositionById as selectPositionById,
  selectVotingCandidatesIdsByPartyPosition as selectIdsByPartyPosition,
  votingSnackbarOpen as snackbarOpen,
  makeCandidateSelected,
} from 'store'
import Candidate from '../Candidate'

interface Props {
  partyId: number
  positionId: number
}

const CandidatesGroupByPartyByPosition: React.FC<Props> = ({ partyId, positionId }) => {
  const candidatesIds = useSelector((state) =>
    selectIdsByPartyPosition(state, partyId, positionId)
  )
  const position = useSelector((state) => selectPositionById(state, positionId))
  const selected = useSelector((state) => selectSelectedByPosition(state, positionId))

  const dispatch = useDispatch()

  const onCandidateSelected = useCallback(
    (candidateId: number) => {
      let selectedCandidate = selected[candidateId]
      let unSelecting = selectedCandidate === true

      if (position.choose_max_count === 1 && !unSelecting) {
        dispatch(makeCandidateSelected(candidateId, !selectedCandidate, true))
        return
      }

      let selectedCount = Object.entries(selected).filter((s) => s[1]).length

      // promp: this position is already full, you can't select more
      if (position.choose_max_count === selectedCount && !unSelecting) {
        let message = `You can only choose ${
          position.choose_max_count
        } candidates for ${position.name.toLowerCase()}, you already have ${selectedCount}.`

        dispatch(
          snackbarOpen({
            text: message,
            duration: 7000,
          })
        )
        return
      }

      dispatch(makeCandidateSelected(candidateId, !selectedCandidate))
    },
    [dispatch, position.choose_max_count, position.name, selected]
  )

  return useMemo(() => {
    if (candidatesIds && candidatesIds.length === 1) {
      return (
        <Candidate
          key={candidatesIds[0]}
          candidateId={candidatesIds[0]}
          onSelect={onCandidateSelected}
        />
      )
    }

    // if we have more than one candidates in a postion
    // just wrap the Candidate with <div></div>
    return (
      <div>
        {candidatesIds &&
          candidatesIds.map((id) => {
            return (
              <div key={id} style={{ marginBottom: '2em' }}>
                <Candidate candidateId={id} onSelect={onCandidateSelected} />
              </div>
            )
          })}
      </div>
    )
  }, [candidatesIds, onCandidateSelected])
}

export default CandidatesGroupByPartyByPosition
