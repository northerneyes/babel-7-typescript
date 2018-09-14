import { action, ActionType } from 'typesafe-actions'
import { Reducer } from 'redux'
import { update } from '../utils'

export enum CounterActionTypes {
  INCREMENT = '@@counter/INCREMENT',
  INCREMENT2 = '@@counter/INCREMENT2',
  DECREMENT = '@@counter/DECREMENT'
}

export interface CounterState {
  readonly count: number
}

export const increment = () => action(CounterActionTypes.INCREMENT)
export const decrement = () => action(CounterActionTypes.DECREMENT)
export const incrementValue = (value: number) =>
  action(CounterActionTypes.INCREMENT2, value)

export const actions = { increment, decrement, incrementValue }

const initialState: CounterState = {
  count: 0
}

export type CounterAction = ActionType<typeof actions>

const reducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return update(state, { count: state.count + 1 })
    }
    case CounterActionTypes.DECREMENT: {
      return update(state, { count: state.count - 1 })
    }
    case CounterActionTypes.INCREMENT2: {
      return update(state, { count: state.count - action.payload })
    }
    default: {
      return state
    }
  }
}

export { reducer as counterReducer }
