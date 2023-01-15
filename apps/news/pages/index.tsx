import { Box, Text } from '@chakra-ui/react';
import { useGlobalStore } from '@mf/common';
import Item from '../components/item';

export default function News() {
  const authenticated = useGlobalStore((o) => o.authenticated);

  return (
    <Box>
      <Item />

      {authenticated && (
        <Text marginTop={2} marginLeft={1} fontSize="sm">
          You are logged in
        </Text>
      )}
    </Box>
  );
}
