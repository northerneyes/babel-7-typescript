import { createStandardAction, ActionType, getType } from 'typesafe-actions'
import { Reducer } from 'redux'
import { update, assertNever } from '../utils'
import { DeepReadonly } from 'utility-types'

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

const initialState: CounterState = {
  count: 0,
  prev: { count: 0 }
}

export const increment = createStandardAction('@@counter/INCREMENT')()
export const decrement = createStandardAction('@@counter/DECREMENT')()
export const incrementAsync = createStandardAction(
  '@@counter-saga/INCREMENT_ASYNC'
)()

const actionCreators = { increment, decrement }
export type CounterAction = ActionType<typeof actionCreators>

const reducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(increment): {
      return update(state, {
        count: state.count + 1,
        prev: update(state.prev, { count: state.count })
      })
    }

    case getType(decrement): {
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
