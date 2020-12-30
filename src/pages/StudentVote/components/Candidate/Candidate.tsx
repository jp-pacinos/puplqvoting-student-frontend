import React, { useMemo } from 'react'

import {
  useSelector,
  selectVotingCandidateById,
  selectVotingPartyById,
  selectIsCandidateSelected,
} from 'store'

import styles from './Candidate.module.css'
import { ImageBox } from './components'
import { fullname } from 'utils/fullname'

interface Props {
  candidateId: number
  onSelect: (candidateId: number) => void
}

const Candidate: React.FC<Props> = ({ candidateId, onSelect }) => {
  const candidate = useSelector((state) => selectVotingCandidateById(state, candidateId))
  const party = useSelector((state) => selectVotingPartyById(state, candidate.party_id))
  const isSelected = useSelector((state) =>
    selectIsCandidateSelected(state, candidate.position_id, candidate.id)
  )

  return useMemo(() => {
    let name = fullname(candidate)

    return (
      <div className={styles.container}>
        <div className={styles.image_container}>
          <ImageBox
            name={name}
            imageSrc={candidate.display_picture}
            isHighlighted={isSelected}
            onClick={() => onSelect(candidate.id)}
            tabIndex={0}
          />
        </div>

        <h3 className={styles.candidate_name}>{name}</h3>
        <h4 className={styles.party_name}>{party.name}</h4>
      </div>
    )
  }, [candidate, isSelected, onSelect, party.name])
}

export default Candidate
