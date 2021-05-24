import { removeCookie } from './../../utils/auth'
import { Dispatch } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import {
  UserActionTypes,
  UserAction,
  UserSignInInfo,
  UserSignUpInfo,
  UserInfo,
} from './user.types'
import {
  setCookie,
  setLocalStorage,
  removeLocalStorage,
} from '../../utils/auth'

export const getUserInfo = (userInfo: UserInfo): UserAction => {
  return {
    type: UserActionTypes.GET_USER_INFO,
    payload: userInfo,
  }
}

export const userSignIn = (userInfo: UserSignInInfo) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.post(`${API}/signin`, userInfo)

      setLocalStorage('user', data.user)
      setCookie('token', data.token)
      dispatch({
        type: UserActionTypes.USER_SIGNED_IN,
        payload: data.user,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const userSignUp = (userInfo: UserSignUpInfo) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.post(`${API}/signup`, userInfo)

      setLocalStorage('user', data.user)
      setCookie('token', data.token)
      dispatch({
        type: UserActionTypes.USER_SIGNED_UP,
        payload: data.user,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const userSignOut = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await axios.post(`${API}/signout`)

      removeLocalStorage('user')
      removeCookie('token')

      dispatch({
        type: UserActionTypes.USER_SIGNED_OUT,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}
