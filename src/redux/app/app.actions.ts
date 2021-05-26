import { AppAction, AppActionTypes } from './app.types'
import { setCookie } from '../../utils/user'

export const changeTheme = (theme: string): AppAction => {
  setCookie('theme', theme)

  return {
    type: AppActionTypes.CHANGE_THEME,
    payload: theme,
  }
}
