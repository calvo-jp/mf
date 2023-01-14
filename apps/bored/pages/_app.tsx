import { ChakraProvider } from '@chakra-ui/react';
import { Layout, theme } from '@mf/common';
import { AppProps } from 'next/app';

import '@module-federation/nextjs-mf/src/include-defaults';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
