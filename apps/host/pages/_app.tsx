import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import { Layout, theme } from '@mf/common';
import '@module-federation/nextjs-mf/src/include-defaults';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const News = dynamic(() => import('@remotes/news/News'));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Flex alignItems="start" justifyContent="center" gap={8}>
          <Box flexShrink={0} width="560px" maxWidth="full">
            <Component {...pageProps} />
          </Box>

          <News />
        </Flex>
      </Layout>
    </ChakraProvider>
  );
}
