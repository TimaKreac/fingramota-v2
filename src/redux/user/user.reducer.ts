import { UserState, UserActionTypes, UserAction } from './user.types'

const initialState: UserState = {
  userInfo: {
    email: '',
    firstName: '',
    lastName: '',
  },
}

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      }
    case UserActionTypes.USER_SIGNED_IN:
      return {
        ...state,
        userInfo: action.payload,
      }
    case UserActionTypes.USER_SIGNED_UP:
      return {
        ...state,
        userInfo: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
