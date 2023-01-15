import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface CardProps {
  title: string;
  body: ReactNode;
  footer?: ReactNode;
}

export function Card({ body, title, footer }: CardProps) {
  return (
    <Box
      padding={8}
      border="1px"
      borderColor="gray.200"
      rounded="md"
      width="560px"
      maxWidth="full"
      flexShrink={0}
    >
      <Heading>{title}</Heading>

      <Box marginTop={2} color="gray.800">
        {body}
      </Box>

      {footer}
    </Box>
  );
}
