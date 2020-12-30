import { DefaultState } from './types'

const initialState: DefaultState = {
  auth: {
    token: sessionStorage.getItem('auth-token'),
  },

  user: {
    firstname: sessionStorage.getItem('auth-user'),
  },

  voting: {
    isVoted: Boolean(Number(sessionStorage.getItem('voting-isVoted'))),
    isCompleted: Boolean(Number(sessionStorage.getItem('voting-isVoted'))),

    selected: {},

    entities: {
      positions: {},
      parties: {},
      candidates: {},
    },

    result: {
      positions: [],
      parties: [],
      candidates: {},
    },

    snackbar: {
      open: false,
      text: '',
      duration: 0,
    },
  },
}

export default initialState
