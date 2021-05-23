import Cookies from 'js-cookie'

export const isAuth = () => {
  if (process.browser) {
    const cookieChecked = getCookie('token')
    if (cookieChecked) {
      return localStorage.getItem('user')
    }
  }
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

// localStorage
export const setLocalStorage = (key: string, value: string) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const removeLocalStorage = (key: string) => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}
