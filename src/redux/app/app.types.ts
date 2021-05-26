export interface AppState {
  theme: string
}

export enum AppActionTypes {
  CHANGE_THEME = 'CHANGE_THEME',
}

interface changeTheme {
  type: AppActionTypes.CHANGE_THEME
  payload: string
}

export type AppAction = changeTheme
