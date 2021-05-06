import { AppProps } from 'next/app'
import 'reset-css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
