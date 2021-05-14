import * as t from './user.types'

interface UserInfo {
  email: string
  firstName: string
  lastName: string
}

const initialState = {
  userInfo: {} as UserInfo,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.USER_SIGNED_IN:
      return {
        ...state,
        userInfo: action.payload,
      }
    case t.USER_SIGNED_UP:
      return {
        ...state,
        userInfo: action.payload,
      }

    default:
      return state
  }
}

export default userReducer
