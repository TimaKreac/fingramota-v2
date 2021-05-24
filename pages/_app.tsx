import { useEffect } from 'react'
import { AppProps } from 'next/app'
import router from 'next/router'
import Nprogress from 'nprogress'
import { wrapper } from '../src/redux/store'
import { useActions } from '../src/hooks/useActions'
import { parseCookies } from '../src/utils/auth'

import 'reset-css'
import 'nprogress/nprogress.css'
import '../src/styles/global.scss'
import { getCookie } from '../src/utils/auth'
import { NextPageContext } from 'next'

router.events.on('routeChangeStart', () => Nprogress.start())
router.events.on('routeChangeError', () => Nprogress.done())
router.events.on('routeChangeComplete', () => Nprogress.done())

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { getUserInfo } = useActions()

  useEffect(() => {
    const cookieChecked = getCookie('token')
    if (cookieChecked) {
      if (localStorage.getItem('user')) {
        const userInfo = localStorage.getItem('user')!

        getUserInfo(JSON.parse(userInfo))
      }
    }
  }, [])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
