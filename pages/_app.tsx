import { AppProps } from 'next/app'
import { Provider } from 'react-redux'

import store from '../src/redux/store'

import Layout from '../src/components/Layout'

import 'reset-css'
import '../src/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
