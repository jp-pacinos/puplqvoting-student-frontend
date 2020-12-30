import { DefaultState } from './types'

export const selectAuthToken = (state: DefaultState) => state.auth.token

export const selectUser = (state: DefaultState) => state.user

/**
 * voting
 */
export const selectIsVotingCompleted = (state: DefaultState) => state.voting.isCompleted

export const selectIsUserVoted = (state: DefaultState) => state.voting.isVoted

// position
export const selectVotingPositionEntities = (state: DefaultState) =>
  state.voting.entities.positions
export const selectVotingPositionIds = (state: DefaultState) =>
  state.voting.result.positions

export const selectVotingPositionById = (state: DefaultState, id: number) =>
  state.voting.entities.positions[id]

// parties
export const selectVotingPartyEntities = (state: DefaultState) =>
  state.voting.entities.parties
export const selectVotingPartyIds = (state: DefaultState) => state.voting.result.parties
export const selectVotingPartyById = (state: DefaultState, partyId: number) =>
  state.voting.entities.parties[partyId]

// candidates
export const selectVotingCandidatesEntities = (state: DefaultState) =>
  state.voting.entities.candidates
export const selectVotingCandidateById = (state: DefaultState, candidateId: number) =>
  state.voting.entities.candidates[candidateId]

// candidates ~ result
export const selectVotingCandidatesIds = (state: DefaultState) =>
  state.voting.result.candidates
export const selectVotingCandidatesIdsByPartyPosition = (
  state: DefaultState,
  partyId: number,
  positionId: number
) => state.voting.result.candidates[partyId][positionId]

// selected ~
export const selectVotingSelected = (state: DefaultState) => state.voting.selected
export const selectSelectedByPosition = (state: DefaultState, postionId: number) =>
  state.voting.selected[postionId]
export const selectIsCandidateSelected = (
  state: DefaultState,
  positionId: number,
  candidateId: number
) => state.voting.selected[positionId][candidateId]
