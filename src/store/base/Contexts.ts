import React from 'react'
import { Actions } from '../actions'
import { DefaultState } from '../types'
import initialState from '../initialState'

type ContextProps = [DefaultState, React.Dispatch<Actions>]

export const StateContext = React.createContext<ContextProps[0]>(initialState)

export const DispatchContext = React.createContext<ContextProps[1]>(() => {})
