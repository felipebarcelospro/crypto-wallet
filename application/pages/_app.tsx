import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../src/themes/theme'
import { SessionProvider } from 'next-auth/react'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  )
}

export default MyApp
