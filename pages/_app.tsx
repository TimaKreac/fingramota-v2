import { useEffect } from 'react'
import { AppProps } from 'next/app'
import router from 'next/router'
import Nprogress from 'nprogress'
import { wrapper } from '../src/redux/store'
import { useActions } from '../src/hooks/useActions'
import { getCookie } from '../src/utils/auth'

import 'reset-css'
import 'nprogress/nprogress.css'
import '../src/styles/global.scss'

router.events.on('routeChangeStart', () => Nprogress.start())
router.events.on('routeChangeError', () => Nprogress.done())
router.events.on('routeChangeComplete', () => Nprogress.done())

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { getUserInfo, userSignOut, changeTheme } = useActions()

  useEffect(() => {
    const theme = getCookie('theme')
    changeTheme(theme ?? 'dark')
    document.body.setAttribute('data-theme', `${theme ?? 'dark'}`)
    const cookieChecked = getCookie('token')
    if (cookieChecked) {
      if (getCookie('user')) {
        const userInfo = getCookie('user')!

        getUserInfo(JSON.parse(userInfo))
      } else {
        userSignOut()
        router.push('/signin')
      }
    }
  }, [])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
