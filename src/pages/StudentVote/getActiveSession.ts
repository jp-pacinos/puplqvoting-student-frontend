import { AxiosRequestConfig } from 'axios'
import isEmpty from 'lodash/isEmpty'

import { Voting } from 'api'
import { DefaultState } from 'store'

type ActiveElectionData = Pick<DefaultState['voting'], 'entities' | 'result' | 'selected'>
interface getActiveSessionProps {
  (options?: AxiosRequestConfig): Promise<ActiveElectionData>
}

/**
 *  fetch the active election data, may return cached data
 *  note: session is same as election
 *
 * @param options
 */
const getActiveSession: getActiveSessionProps = async (options = {}) => {
  const cachedActiveElection: ActiveElectionData = JSON.parse(
    sessionStorage.getItem('voting-data') || '{}'
  )

  if (!isEmpty(cachedActiveElection)) {
    return cachedActiveElection
  }

  const response = await Voting.getActiveSession(options)
  const activeElection = normalizeData(response.data)
  sessionStorage.setItem('voting-data', JSON.stringify(activeElection))

  return activeElection
}

export default getActiveSession

//

const normalizeData = (
  data: Voting.Response.Success.getActiveSession
): ActiveElectionData => {
  let newData: ActiveElectionData = {
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

    selected: {},
  }

  // positions
  for (let i = 0; i < data.positions.length; i++) {
    newData.result.positions.push(data.positions[i].id)
    newData.entities.positions = {
      ...newData.entities.positions,
      [data.positions[i].id]: data.positions[i],
    }
  }

  // parties
  for (let i = 0; i < data.parties.length; i++) {
    newData.result.parties.push(data.parties[i].id)
    newData.entities.parties = {
      ...newData.entities.parties,
      [data.parties[i].id]: data.parties[i],
    }
  }

  // candidates
  for (let i = 0; i < data.candidates.length; i++) {
    let candidateId = data.candidates[i].id
    let candidate = data.candidates[i]

    newData.entities.candidates = {
      ...newData.entities.candidates,
      [candidateId]: candidate,
    }

    if (!newData.result.candidates[candidate.party_id]) {
      newData.result.candidates[candidate.party_id] = {}
    }

    if (!newData.result.candidates[candidate.party_id][candidate.position_id]) {
      newData.result.candidates[candidate.party_id][candidate.position_id.toString()] = []
    }

    newData.result.candidates[candidate.party_id][candidate.position_id].push(
      candidate.id
    )

    //

    if (!newData.selected[candidate.position_id]) {
      newData.selected[candidate.position_id] = {}
    }

    newData.selected[candidate.position_id][candidate.id] = false
  }

  return newData
}
