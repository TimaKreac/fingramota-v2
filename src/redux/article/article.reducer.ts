import {
  ArticleActionTypes,
  ArticleAction,
  ArticleState,
} from './article.types'

const initialState: ArticleState = {
  articles: [],
  category: {
    name: '',
    slug: '',
  },
}

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      }
    case ArticleActionTypes.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    case ArticleActionTypes.CREATE_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
      }
    case ArticleActionTypes.DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((a) => a._id !== action.payload._id),
      }
    default:
      return state
  }
}
