import NextHead from 'next/head'

import {
  Box,
  Container,
  Heading,
  Badge,
  Button,
  Divider,
  Input
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { version } from '../../package.json'
import { FiChevronLeft } from 'react-icons/fi'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

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
      <Box minH="100vh">
        <Container
          px="10"
          py="12"
          d="flex"
          flexDir="column"
          alignItems="flex-start"
        >
          <Button leftIcon={<FiChevronLeft />} variant="link" mb="8">
            Entrar
          </Button>

          <Button
            leftIcon={<FaGoogle />}
            size="lg"
            w="full"
            variant="outline"
            mb="4"
          >
            Entrar com Google
          </Button>
          <Button
            leftIcon={<FaFacebook />}
            size="lg"
            w="full"
            variant="outline"
          >
            Entrar com Facebook
          </Button>

          <Divider my="8" opacity="0.6" />

          <Input mb="4" size="lg" placeholder="Email" />

          <Button
            colorScheme="cyan"
            leftIcon={<FaFacebook />}
            size="lg"
            w="full"
          >
            Continue com email
          </Button>
        </Container>
      </Box>
    </>
  )
}

export default Home
