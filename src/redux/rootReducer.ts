import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

import { appReducer } from './app/app.reducer'
import { userReducer } from './user/user.reducer'
import { categoryReducer } from './category/category.reducer'
import { articleReducer } from './article/article.reducer'

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  category: categoryReducer,
  article: articleReducer,
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
