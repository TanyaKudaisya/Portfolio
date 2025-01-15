import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      },
    }),
  },
  components: {
    Button: {
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'purple.500' : 'purple.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'purple.600' : 'purple.600',
          },
        }),
      },
    },
  },
});

export default theme;