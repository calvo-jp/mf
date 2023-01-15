import { Box, List, ListItem, Text } from '@chakra-ui/react';
import { useGlobalStore } from '@mf/common';
import Head from 'next/head';
import Link from 'next/link';

export default function Host() {
  const authenticated = useGlobalStore((o) => o.authenticated);

  return (
    <>
      <Head>
        <title>Host</title>
      </Head>

      <Box maxWidth="500px">
        {authenticated && (
          <Text marginBottom={4} fontSize="sm">
            You are logged in
          </Text>
        )}

        <List spacing={2}>
          {links.map(({ path, label }) => (
            <ListItem key={path}>
              <Box
                as={Link}
                href={path}
                border="1px solid"
                borderColor="gray.200"
                display="block"
                paddingY={4}
                paddingX={6}
                rounded="md"
                _hover={{
                  borderColor: 'gray.300',
                }}
                _focus={{
                  outline: 'none',
                  borderColor: 'blue.300',
                }}
              >
                {label}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

const links = [
  {
    path: '/jokes',
    label: 'Jokes app 🙃',
  },
  {
    path: '/bored',
    label: 'Bored? 🙄😏',
  },
];
