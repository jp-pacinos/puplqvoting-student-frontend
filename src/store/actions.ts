import { DefaultState } from './types'

/**
 * note
 * - init const type
 * - make function
 * - add types, see Actions type
 */

export const USER_UPDATE = 'user/update'
export const TOKEN_UPDATE = 'token/update'
export const TOKEN_REMOVE = 'token/remove'
export const VOTING_MAKEVOTED = 'voting/makeVoted'
export const VOTING_MAKECOMPLETED = 'voting/makeCompleted'
export const VOTING_INITIAL_DATA = 'voting/initialData'
export const VOTING_CANDIDATE_SELECTED = 'voting/candidateSelected'
export const VOTING_SNACKBAR_OPEN = 'voting/snackbarOpen'
export const VOTING_SNACKBAR_CLOSE = 'voting/snackbarClose'

/**
 * user
 */

export const setUserFirstName = (firstname: DefaultState['user']['firstname']) => {
  sessionStorage.setItem('auth-user', firstname as string)
  return { type: USER_UPDATE, payload: { user: { firstname } } } as const
}

/**
 * token
 */

/**
 * @param token token
 * @param store also store the value to sessionStorage default is true
 */
export const setToken = (token: DefaultState['auth']['token'], store: boolean = true) => {
  if (store) sessionStorage.setItem('auth-token', token as string)
  return { type: TOKEN_UPDATE, payload: { token } } as const
}

export const removeToken = () => {
  sessionStorage.removeItem('auth-token')
  return setToken(null, false)
}

/**
 * voting
 */

export const makeVoted = (isVoted: DefaultState['voting']['isVoted'] = true) => {
  sessionStorage.setItem('voting-isVoted', Number(isVoted).toString())
  return { type: VOTING_MAKEVOTED, payload: { isVoted } } as const
}

export const makeVoteCompleted = (
  isCompleted: DefaultState['voting']['isCompleted'] = true
) => {
  sessionStorage.setItem('voting-isCompleted', Number(isCompleted).toString())
  return { type: VOTING_MAKECOMPLETED, payload: { isCompleted } } as const
}

export const setInitialVotingData = (
  data: Pick<DefaultState['voting'], 'entities' | 'result' | 'selected'>
) => {
  return { type: VOTING_INITIAL_DATA, payload: data } as const
}

export const makeCandidateSelected = (
  id: number,
  isSelected: boolean = true,
  sync: boolean = false
) => {
  return {
    type: VOTING_CANDIDATE_SELECTED,
    payload: {
      id,
      isSelected,
      sync,
    },
  } as const
}

export const votingSnackbarOpen = (
  params: Pick<DefaultState['voting']['snackbar'], 'text' | 'duration'>
) => {
  return {
    type: VOTING_SNACKBAR_OPEN,
    payload: params,
  } as const
}

export const votingSnackbarClose = () => {
  return {
    type: VOTING_SNACKBAR_CLOSE,
  } as const
}

/**
 * Action types
 */

export type Actions =
  | ReturnType<typeof setUserFirstName>
  | ReturnType<typeof setToken>
  | ReturnType<typeof removeToken>
  | ReturnType<typeof makeVoted>
  | ReturnType<typeof makeVoteCompleted>
  | ReturnType<typeof setInitialVotingData>
  | ReturnType<typeof makeCandidateSelected>
  | ReturnType<typeof votingSnackbarOpen>
  | ReturnType<typeof votingSnackbarClose>
