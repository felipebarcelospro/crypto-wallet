import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  },
  components: {
    Button: {
      defaultProps: {
        size: 'sm'
      },
      variants: {
        solid: {
          border: '1px solid',
          borderColor: 'gray.600'
        }
      }
    }
  }
})
