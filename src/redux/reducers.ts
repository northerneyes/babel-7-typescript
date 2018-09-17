import { combineReducers } from 'redux'
import { CounterState, counterReducer } from './counter/counter'

export interface ApplicationState {
  counter: CounterState
}

export const rootReducer = combineReducers<ApplicationState>({
  counter: counterReducer
})
