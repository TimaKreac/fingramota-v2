export interface UserInfo {
  email: string
  firstName: string
  lastName: string
}

export interface UserState {
  userInfo: UserInfo
}

export enum UserActionTypes {
  GET_USER_INFO = 'GET_USER_INFO',
  USER_SIGNED_IN = 'USER_SIGNED_IN',
  USER_SIGNED_UP = 'USER_SIGNED_UP',
}

interface getInitialUserInfoAction {
  type: UserActionTypes.GET_USER_INFO
  payload: UserInfo
}

interface userSignInAction {
  type: UserActionTypes.USER_SIGNED_IN
  payload: UserInfo
}

interface userSignUpAction {
  type: UserActionTypes.USER_SIGNED_UP
  payload: UserInfo
}

export type UserAction =
  | getInitialUserInfoAction
  | userSignInAction
  | userSignUpAction
