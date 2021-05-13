import { CHANGE_SIGN_UP_FORM } from './user.types'

const INITIAL_STATE = {}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIGN_UP_FORM:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.key]: action.payload.value,
        },
      }
    case 'USER_SIGN_UP':
      return state
    default:
      return state
  }
}

export default userReducer
