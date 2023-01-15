import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

export default function News() {
  return (
    <Box width="400px" maxWidth="full">
      <AspectRatio ratio={16 / 9} width="full">
        <Image
          src="https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1263,c_fill,g_auto,h_711,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F230114230051-01-miss-usa-011423.jpg"
          alt=""
          width={1000}
          height={500}
        />
      </AspectRatio>

      <Box
        border="1px"
        borderTop="0px"
        borderColor="gray.200"
        roundedBottom="md"
        padding={4}
      >
        <Heading fontSize="xl">
          Miss USA R&apos;Bonney Gabriel crowned Miss Universe
        </Heading>
        <Text fontSize="xs" marginTop={2} color="gray.600">
          Updated 15th January 2023
        </Text>
        <Text fontSize="sm" marginTop={3} color="gray.800">
          Gabriel, who last year became the first Filipino-American to win Miss
          USA, took the crown ahead of Amanda Dudamel from Venezuela and
          Andreína Martínez from the Dominican Republic.
        </Text>
      </Box>
    </Box>
  );
}
