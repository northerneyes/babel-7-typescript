import {
  Store,
  DeepPartial,
  applyMiddleware,
  createStore as reduxCreateStore
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { ApplicationState, rootReducer, AllActions } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const createStore = (
  initialState: DeepPartial<ApplicationState>
): Store<ApplicationState, AllActions> => {
  const store = reduxCreateStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)
  return store
}
