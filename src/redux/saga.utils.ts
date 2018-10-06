import { takeLatest, HelperFunc0, ForkEffect } from 'redux-saga/effects'
import { Action } from 'redux'

export function takeLatestAction<A extends Action>(
  pattern: A['type'],
  worker: HelperFunc0<A>
): ForkEffect {
  return takeLatest(pattern, worker)
}

export function takeLatestActions<A extends Action>(
  pattern: Array<A['type']>,
  worker: HelperFunc0<A>
): ForkEffect {
  return takeLatest(pattern, worker)
}
