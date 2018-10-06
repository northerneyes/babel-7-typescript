import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'
import { counterReducer } from './counter/counter'

export const rootReducer = combineReducers({
  counter: counterReducer
})

export type ApplicationState = StateType<typeof rootReducer>
