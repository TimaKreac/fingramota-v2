import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import { userReducer } from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
})

export const reducer = (state: any, action: any): RootState => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export type RootState = ReturnType<typeof rootReducer>
