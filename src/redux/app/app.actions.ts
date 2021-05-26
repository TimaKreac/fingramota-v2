import { AppAction, AppActionTypes } from './app.types'
import { setCookie } from '../../utils/auth'

export const changeTheme = (theme: string): AppAction => {
  setCookie('theme', theme)

  return {
    type: AppActionTypes.CHANGE_THEME,
    payload: theme,
  }
}
