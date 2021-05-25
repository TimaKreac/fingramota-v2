import {
  CategoryState,
  CategoryAction,
  CategoryActionTypes,
} from './category.types'

const initialState: CategoryState = {
  categories: [],
}

export const categoryReducer = (
  state = initialState,
  action: CategoryAction
): CategoryState => {
  switch (action.type) {
    case CategoryActionTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      }
    case CategoryActionTypes.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      }
    default:
      return state
  }
}
