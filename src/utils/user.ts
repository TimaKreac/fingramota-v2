import { NextPageContext } from 'next'
import cookie from 'cookie'
import Cookies from 'js-cookie'
import axios from 'axios'
import { API } from '../../config'

export const getUser = async (token: string) => {
  try {
    const res = await axios.get(`${API}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    return res.data
  } catch (error) {
    console.log(error.message)
  }
}

export const checkIsAdmin = async (token: string): Promise<boolean> => {
  const user = await getUser(token)

  if (user && user.role === 'admin') {
    return true
  }
  return false
}

export const checkIsAuth = async (token: string): Promise<boolean> => {
  const user = await getUser(token)

  if (user.role) {
    return true
  }
  return false
}

// server cookie
export const parseCookies = (ctx: NextPageContext) => {
  return cookie.parse(ctx.req ? ctx.req.headers.cookie || '' : document.cookie)
}

// cookies
export const getCookie = (key: string) => {
  if (process.browser) {
    return Cookies.get(key)
  }
}
export const setCookie = (key: string, value: string) => {
  if (process.browser) {
    Cookies.set(key, value, {
      expires: 365,
    })
  }
}

export const removeCookie = (key: string) => {
  if (process.browser) {
    Cookies.remove(key, {
      expires: 365,
    })
  }
}
