import { AnyAction } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import * as t from './user.types'

interface UserInfo {
  email: string
  firstName: string
  lastName: string
}

interface State {
  userInfo: UserInfo
}

const initialState = {
  userInfo: {
    email: '',
    firstName: '',
    lastName: '',
  },
}

const userReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case t.GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      }
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
