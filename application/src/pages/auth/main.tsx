import { Box, Button } from '@chakra-ui/react'
import { signIn } from 'next-auth/react'
import { FiGithub } from 'react-icons/fi'

export const AuthMainPage = (): React.ReactElement => {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button leftIcon={<FiGithub />} onClick={() => signIn('github')}>
        Entrar com GitHub
      </Button>
    </Box>
  )
}
