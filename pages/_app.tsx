import router from 'next/router'
import Nprogress from 'nprogress'
import { AppProps } from 'next/app'
import { wrapper } from '../src/redux/store'

import 'reset-css'
import 'nprogress/nprogress.css'
import '../src/styles/global.scss'

router.events.on('routeChangeStart', () => Nprogress.start())
router.events.on('routeChangeError', () => Nprogress.done())
router.events.on('routeChangeComplete', () => Nprogress.done())

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
