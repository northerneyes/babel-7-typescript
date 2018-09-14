import { Store, DeepPartial, createStore as reduxCreateStore } from 'redux'

import { ApplicationState, rootReducer, AllActions } from './reducers'

export const createStore = (
  initialState: DeepPartial<ApplicationState>
): Store<ApplicationState, AllActions> =>
  reduxCreateStore(rootReducer, initialState)
