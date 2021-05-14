import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'

import store from '../src/redux/store'

import Layout from '../src/components/Layout'

import 'reset-css'
import '../src/styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

const makeStore = () => store

const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
