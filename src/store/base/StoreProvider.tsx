import React, { useReducer } from 'react'

import { StateContext, DispatchContext } from './Contexts'
import reducer from '../reducer'
import initialState from '../initialState'

interface Props {
  //
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export default StoreProvider
