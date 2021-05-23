import { createStore, applyMiddleware, Store } from 'redux'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { reducer, RootState } from './rootReducer'

const middlewares = [thunk, logger]

const makeStore: MakeStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)))

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
})
