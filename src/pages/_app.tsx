import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from '@/contexts/SessionContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Findout - Delivery App</title>
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp

