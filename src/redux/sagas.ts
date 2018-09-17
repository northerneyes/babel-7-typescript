import { delay } from 'redux-saga'
import { all, select, call, put, takeLatest } from 'redux-saga/effects'
import { PromiseType } from 'utility-types'
import { CounterActionTypes, increment } from './counter/counter'
import { ApplicationState } from './reducers'
// import * as Promise from 'bluebird'

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

export function* incrementAsync() {
  const selector = (state: ApplicationState) => state.counter.count
  const counterValue: ReturnType<typeof selector> = yield select(selector)
  console.log('counterValue', counterValue)
  const value: PromiseType<ReturnType<typeof fetch>> = yield call(fetch, 4)
  console.log('fetch', value)
  yield delay(50)
  yield put(increment())
}

export function* incrementSaga() {
  yield takeLatest(CounterActionTypes.INCREMENT_ASYNC, incrementAsync)
}

export default function* rootSaga() {
  yield all([incrementSaga()])
}
