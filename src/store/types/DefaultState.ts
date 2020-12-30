import { Response } from 'api/voting/types'
import { SnackbarProps } from 'components/Snackbar'

export default interface DefaultState {
  user: {
    firstname: string | null
  }

  auth: {
    token: string | null
  }

  voting: {
    isVoted: boolean
    isCompleted: boolean

    selected: {
      [positionId: string]: {
        [candidateId: string]: boolean
      }
    }

    entities: {
      positions: {
        [key: string]: Response.Position
      }
      parties: {
        [key: string]: Response.Party
      }
      candidates: {
        [key: string]: Response.Candidate
      }
    }

    result: {
      positions: number[]
      parties: number[]
      candidates: {
        [partyId: string]: {
          [positionId: string]: number[]
        }
      }
    }

    snackbar: Pick<SnackbarProps, 'open' | 'text' | 'duration'>
  }
}
