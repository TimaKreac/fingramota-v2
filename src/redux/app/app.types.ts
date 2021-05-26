export interface AppState {
  theme: 'dark' | 'light'
}

export enum AppActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

interface changeTheme {
  type: AppActionTypes.CHANGE_THEME
  payload: 'dark' | 'light'
}

export type AppAction = changeTheme
