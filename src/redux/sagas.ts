import { delay } from 'redux-saga'
import { all, select, call, put } from 'redux-saga/effects'
import { ActionType, getType } from 'typesafe-actions'
import { PromiseType } from 'utility-types'
import { increment, incrementAsync } from './counter/counter'
import { ApplicationState } from './reducers'
import { takeLatestAction } from './saga.utils'

function fetch(value: number) {
  const promise = new Promise<number>((resolve, reject) => {
    if (value < 10) {
      resolve(value)
    } else {
      reject(new Error('value should be less then 10'))
    }
  })
  return promise
}

type incrementAsyncAction = ActionType<typeof incrementAsync>

export function* incrementAsyncWorker(_: incrementAsyncAction) {
  const countSelector = (state: ApplicationState) => state.counter.count
  const counterValue: ReturnType<typeof countSelector> = yield select(
    countSelector
  )
  console.log('counterValue', counterValue)
  const value: PromiseType<ReturnType<typeof fetch>> = yield call(fetch, 4)
  console.log('fetch', value)
  yield delay(50)
  yield put(increment())
}

export function* incrementSaga() {
  yield takeLatestAction(getType(incrementAsync), incrementAsyncWorker)
}

export default function* rootSaga() {
  yield all([incrementSaga()])
}
