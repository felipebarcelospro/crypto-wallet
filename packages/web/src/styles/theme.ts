import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif'
  },
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#1a202c'
    }
  }
})
