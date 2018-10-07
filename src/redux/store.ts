import {
  DeepPartial,
  applyMiddleware,
  createStore as reduxCreateStore
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ApplicationState, rootReducer } from './reducers'
import rootSaga from './sagas'
import logger from './logger'

const sagaMiddleware = createSagaMiddleware()

export const createStore = (
  initialState: DeepPartial<ApplicationState> = {}
) => {
  const store = reduxCreateStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  )
  sagaMiddleware.run(rootSaga)
  return store
}
