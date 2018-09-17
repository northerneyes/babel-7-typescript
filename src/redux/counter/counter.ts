import { action, ActionType } from 'typesafe-actions'
import { Reducer } from 'redux'
import { update, assertNever } from '../utils'
import { DeepReadonly } from 'utility-types'

export enum CounterActionTypes {
  INCREMENT = '@@counter/INCREMENT',
  DECREMENT = '@@counter/DECREMENT',
  INCREMENT_ASYNC = '@@counter-saga/INCREMENT_ASYNC'
}

type Item = {
  id: string
  name: string
}

export type CounterState = DeepReadonly<{
  count: number
  items?: Item[]
  prev: {
    count: number
  }
}>

export const increment = () => action(CounterActionTypes.INCREMENT)
export const incrementAsync = () => action(CounterActionTypes.INCREMENT_ASYNC)
export const decrement = () => action(CounterActionTypes.DECREMENT)

export const actions = { increment, decrement }

const initialState: CounterState = {
  count: 0,
  prev: { count: 0 }
}

export type CounterAction = ActionType<typeof actions>

const reducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      return update(state, {
        count: state.count + 1,
        prev: update(state.prev, { count: state.count })
      })
    }

    case CounterActionTypes.DECREMENT: {
      return update(state, {
        count: state.count - 1,
        prev: update(state.prev, { count: state.count })
      })
    }

    default: {
      return assertNever<CounterState>(action, state)
    }
  }
}

export { reducer as counterReducer }
