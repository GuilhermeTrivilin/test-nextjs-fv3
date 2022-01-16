import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

<Head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></Head>

  return <Component {...pageProps} />
}

export default MyApp
