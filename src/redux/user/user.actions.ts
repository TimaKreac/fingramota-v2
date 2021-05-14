import axios from 'axios'
import * as t from './user.types'
import { API } from '../../../config'
import { setCookie, setLocalStorage } from '../../utils/auth'

export const userSignIn = (userInfo, cb?: () => void) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API}/signin`, userInfo)

    setLocalStorage('user', data.user)
    setCookie('token', data.token)
    dispatch({
      type: t.USER_SIGNED_IN,
      payload: data.user,
    })
    console.log('1')
    cb()
  } catch (error) {
    console.log(error.message)
  }
}

export const userSignUp = (userInfo, cb?: () => void) => async (dispatch) => {
  try {
    const { data } = await axios.post(`${API}/signup`, userInfo)

    setLocalStorage('user', data.user)
    setCookie('token', data.token)
    dispatch({
      type: t.USER_SIGNED_UP,
      payload: data.user,
    })
    cb()
  } catch (error) {
    console.log(error.message)
  }
}
