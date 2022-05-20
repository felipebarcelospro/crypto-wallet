import NextHead from 'next/head'

import { Box, Container, Heading, Badge } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { version } from '../../package.json'

const Home = (): ReactElement => {
  return (
    <>
      <NextHead>
        <link rel="manifest" href="manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Omnirepo" />
        <meta name="apple-mobile-web-app-title" content="Omnirepo" />
        <meta name="theme-color" content="#000" />
        <meta name="msapplication-navbutton-color" content="#000" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-starturl" content="/" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>

        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>

        <title>Omnirepo V{version}</title>
      </NextHead>
      <Box minH="100vh" d="flex" alignItems="center">
        <Container textAlign="center">
          <Heading>Omnirepo</Heading>
          <Badge colorScheme="green">Version {version}</Badge>
        </Container>
      </Box>
    </>
  )
}

export default Home
