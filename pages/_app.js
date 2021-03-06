import "../styles/globals.css"
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from "../components/analytics"
import siteMetadata from "../data/siteMetadata"
import { ClientReload } from "../components/utilities/ClientReload"
import LayoutWrapper from "../components/layout/LayoutWrapper"
import { proxy, useProxy, useSnapshot } from 'valtio'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export function useStore() {
  return useSnapshot(store)
}

const store = proxy({
  sections: 3,
  pages: 3, 
  zoom: 75,
  top: 0
})

export const set_TOP = (val) => {
  store.top = val
}

export default function App({ Component, pageProps }) {

  const router = useRouter()
  
  
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
