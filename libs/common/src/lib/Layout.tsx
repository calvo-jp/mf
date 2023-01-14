import { Box } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box minHeight="100vh">
      <Navbar />

      <Box
        as="main"
        padding={{
          base: 4,
          md: 8,
          lg: 16,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
