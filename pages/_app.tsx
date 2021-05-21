import { AppProps } from 'next/app'
import { wrapper } from '../src/redux/store'

import 'reset-css'
import '../src/styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
