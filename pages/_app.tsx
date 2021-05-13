import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../src/redux/store'

import 'reset-css'
import '../src/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
