import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: "'Oxygen', sans-serif",
    heading: "'PT Serif', serif",
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      body: {
        scrollBehavior: 'smooth',
        minHeight: '100vh',
        bgColor: '#FFFFFF',
        color: 'gray.900',
      },
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          borderColor: 'gray.200',
          _hover: {
            borderColor: 'gray.300',
            bgColor: 'transparent',
          },
          _focus: {
            boxShadow: 'none',
            borderColor: 'blue.200',
          },
          _active: {},
        },
      },
    },
  },
});
