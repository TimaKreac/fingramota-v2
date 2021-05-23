import { Dispatch } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import { UserInfo, UserActionTypes, UserAction } from './user.types'
import { setCookie, setLocalStorage, getCookie } from '../../utils/auth'

export const getInitialUserInfo = (): UserAction | undefined => {
  if (process.browser) {
    const cookieChecked = getCookie('token')
    if (cookieChecked) {
      const userInfo = localStorage.getItem('user')!
      return {
        type: UserActionTypes.GET_USER_INFO,
        payload: JSON.parse(userInfo),
      }
    }
  }
}

export const userSignIn = (userInfo: UserInfo, cb?: () => void) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.post(`${API}/signin`, userInfo)

      setLocalStorage('user', data.user)
      setCookie('token', data.token)
      dispatch({
        type: UserActionTypes.USER_SIGNED_IN,
        payload: data.user,
      })
      cb?.()
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const userSignUp = (userInfo: UserInfo, cb?: () => void) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const { data } = await axios.post(`${API}/signup`, userInfo)

      setLocalStorage('user', data.user)
      setCookie('token', data.token)
      dispatch({
        type: UserActionTypes.USER_SIGNED_UP,
        payload: data.user,
      })
      cb?.()
    } catch (error) {
      console.log(error.message)
    }
  }
}
