import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import { ReactElement } from 'react'
import { theme } from '../styles/theme'

export const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
