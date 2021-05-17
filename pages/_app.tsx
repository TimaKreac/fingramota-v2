import { AppProps } from 'next/app'
import { wrapper } from '../src/redux/store'

import Layout from '../src/components/Layout'

import 'reset-css'
import '../src/styles/global.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
