import { Avatar, Box, Button } from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import { FiLogOut } from 'react-icons/fi'

export const AppMainPage = (): React.ReactElement => {
  const { data } = useSession()

  if (!data || !data.user) return <h1>Loading</h1>

  return (
    <Box
      minH="100vh"
      flexDir="column"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar
        size="md"
        name={String(data.user.name)}
        src={String(data.user.image)}
        mb="4"
      />

      <Button leftIcon={<FiLogOut />} onClick={() => signOut()}>
        Desconectar
      </Button>
    </Box>
  )
}
