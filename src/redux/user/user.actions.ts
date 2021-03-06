import { removeCookie } from '../../utils/user'
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
import { setCookie } from '../../utils/user'

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

      setCookie('user', data.user)
      setCookie('token', data.token)
      dispatch({
        type: UserActionTypes.USER_SIGNED_IN,
        payload: data.user,
      })
    } catch (error) {
      console.error(error.message)
    }
  }
}

export const userSignUp = (userInfo: UserSignUpInfo) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.post(`${API}/signup`, userInfo)

      setCookie('token', data.user)
      setCookie('token', data.token)
      dispatch({
        type: UserActionTypes.USER_SIGNED_UP,
        payload: data.user,
      })
    } catch (error) {
      console.error(error.message)
    }
  }
}

export const userSignOut = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await axios.post(`${API}/signout`)

      removeCookie('user')
      removeCookie('token')

      dispatch({
        type: UserActionTypes.USER_SIGNED_OUT,
      })
    } catch (error) {
      console.error(error.message)
    }
  }
}
