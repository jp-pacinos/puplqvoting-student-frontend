import React, { useMemo } from 'react'

import {
  useSelector,
  selectVotingPositionById,
  selectVotingPartyIds,
} from 'store'
import styles from './CandidatesGroup.module.css'

import CandidatesGroupByPartyByPosition from './CandidatesGroupByPartyByPosition'

interface Props {
  positionId: number
}

const CandidatesGroup: React.FC<Props> = ({ positionId }) => {
  const position = useSelector((state) =>
    selectVotingPositionById(state, positionId)
  )

  const partiesIds = useSelector(selectVotingPartyIds)

  return useMemo(
    () => (
      <div className={styles.container}>
        <h2 className={styles.position_title}>{position.name.toLowerCase()}</h2>

        <div className={styles.candidates_group}>
          {partiesIds.map((id) => {
            return (
              <CandidatesGroupByPartyByPosition
                key={id}
                partyId={id}
                positionId={positionId}
              />
            )
          })}
        </div>
      </div>
    ),
    [partiesIds, position.name, positionId]
  )
}

export default CandidatesGroup
