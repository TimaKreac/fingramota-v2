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
export const getCookie = (key) => {
  if (process.browser) {
    return Cookies.get(key)
  }
}
export const setCookie = (key, value) => {
  if (process.browser) {
    Cookies.set(key, value, {
      expires: 365,
    })
  }
}

export const removeCookie = (key) => {
  if (process.browser) {
    Cookies.remove(key, {
      expires: 365,
    })
  }
}

// localStorage
export const setLocalStorage = (key, value) => {
  if (process.browser) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const removeLocalStorage = (key) => {
  if (process.browser) {
    localStorage.removeItem(key)
  }
}
