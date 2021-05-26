import { AppState, AppAction, AppActionTypes } from './app.types'

const initialState: AppState = {
  theme: 'dark',
}

export const appReducer = (
  state = initialState,
  action: AppAction
): AppState => {
  switch (action.type) {
    case AppActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}
