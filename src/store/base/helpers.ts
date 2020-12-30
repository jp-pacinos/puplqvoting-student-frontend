import { useContext } from 'react'

import { StateContext, DispatchContext } from './Contexts'
import { DefaultState } from '../types'

export const useStore = () => {
  return useContext(StateContext) // return state only
}

export const useDispatch = () => {
  return useContext(DispatchContext) // return dispatch only
}

export const useSelector = <Selected = unknown>(
  selector: (state: DefaultState) => Selected
) => {
  const store = useContext(StateContext)

  return selector(store)
}
