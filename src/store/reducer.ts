import { DefaultState } from './types'
import {
  Actions,
  TOKEN_UPDATE,
  // TOKEN_REMOVE,
  USER_UPDATE,
  VOTING_MAKEVOTED,
  VOTING_MAKECOMPLETED,
  VOTING_INITIAL_DATA,
  VOTING_CANDIDATE_SELECTED,
  VOTING_SNACKBAR_OPEN,
  VOTING_SNACKBAR_CLOSE,
} from './actions'

const reducer = (state: DefaultState, action: Actions): DefaultState => {
  switch (action.type) {
    /**
     * token
     */
    case TOKEN_UPDATE: {
      return {
        ...state,
        auth: {
          ...state.auth,
          token: action.payload.token,
        },
      }
    }

    /**
     * user
     */
    case USER_UPDATE: {
      return {
        ...state,
        user: action.payload.user,
      }
    }

    /**
     * voting
     */
    case VOTING_MAKEVOTED: {
      return {
        ...state,
        voting: {
          ...state.voting,
          isVoted: action.payload.isVoted,
        },
      }
    }

    case VOTING_MAKECOMPLETED: {
      return {
        ...state,
        voting: {
          ...state.voting,
          isCompleted: action.payload.isCompleted,
        },
      }
    }

    case VOTING_INITIAL_DATA: {
      return {
        ...state,
        voting: {
          ...state.voting,
          entities: action.payload.entities,
          result: action.payload.result,
          selected: action.payload.selected,
        },
      }
    }

    case VOTING_CANDIDATE_SELECTED: {
      const candidate = state.voting.entities.candidates[action.payload.id]

      let newSelected: DefaultState['voting']['selected']['positionId'] = {}

      if (action.payload.sync) {
        for (let id in state.voting.selected[candidate.position_id]) {
          newSelected = {
            ...newSelected,
            [id]: !action.payload.isSelected,
          }
        }

        newSelected[candidate.id] = action.payload.isSelected
      } else {
        newSelected = {
          ...state.voting.selected[candidate.position_id],
          [candidate.id]: action.payload.isSelected,
        }
      }

      return {
        ...state,
        voting: {
          ...state.voting,
          selected: {
            ...state.voting.selected,
            [candidate.position_id]: newSelected,
          },
        },
      }
    }

    case VOTING_SNACKBAR_OPEN: {
      return {
        ...state,
        voting: {
          ...state.voting,
          snackbar: {
            ...state.voting.snackbar,
            ...action.payload,
            open: true,
          },
        },
      }
    }

    case VOTING_SNACKBAR_CLOSE: {
      return {
        ...state,
        voting: {
          ...state.voting,
          snackbar: {
            ...state.voting.snackbar,
            open: false,
          },
        },
      }
    }

    /**
     * default !
     */
    default: {
      return state
    }
  }
}

export default reducer
