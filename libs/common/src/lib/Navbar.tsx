import { chakra, Flex, Heading, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { useGlobalStore } from './useGlobalStore';

export function Navbar() {
  const store = useGlobalStore();

  return (
    <Flex
      as="header"
      borderBottom="1px solid"
      borderColor="gray.200"
      paddingY={3}
      paddingX={6}
      alignItems="center"
    >
      <Link href="/" aria-label="Go to Homepage">
        <Heading size="lg">MF</Heading>
      </Link>

      <Spacer />

      <chakra.button onClick={() => store.authenticate(!store.authenticated)}>
        {store.authenticated ? 'Logout' : 'Login'}
      </chakra.button>
    </Flex>
  );
}
