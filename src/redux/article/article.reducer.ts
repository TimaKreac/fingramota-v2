import {
  ArticleActionTypes,
  ArticleAction,
  ArticleState,
} from './article.types'

const initialState: ArticleState = {
  articles: [],
}

export const userReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      }
    default:
      return state
  }
}
