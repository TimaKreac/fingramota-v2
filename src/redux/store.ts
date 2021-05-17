import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = [thunk, logger]

const makeStore = () =>
  createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))

export const wrapper = createWrapper(makeStore)
