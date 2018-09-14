import { combineReducers } from 'redux'
import { ActionType } from 'typesafe-actions'
import { CounterState, counterReducer, actions } from './counter/counter'

const allActions = { ...actions }
export type AllActions = ActionType<typeof allActions>

export interface ApplicationState {
  counter: CounterState
}

export const rootReducer = combineReducers<ApplicationState, AllActions>({
  counter: counterReducer
})
