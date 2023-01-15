import { Box, BoxProps } from '@chakra-ui/react';
import { Navbar } from './Navbar';

export function Layout({ children, ...props }: BoxProps) {
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
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
}
