import { Button, chakra, Text } from '@chakra-ui/react';
import { Card, useGlobalStore } from '@mf/common';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import randomJoke, { RandomJoke } from '../utils/randomJoke';

export default function Jokes() {
  const authenticated = useGlobalStore((o) => o.authenticated);

  const [data, setData] = useState<RandomJoke | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshJoke = useCallback(async () => {
    try {
      setLoading(true);
      setData(await randomJoke());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshJoke();
  }, [refreshJoke]);

  useEffect(() => {
    setData(null);
    setLoading(true);
  }, []);

  return (
    <>
      <Head>
        <title>Jokes</title>
      </Head>

      {authenticated && (
        <Text marginBottom={4} fontSize="sm">
          You are logged in
        </Text>
      )}

      <Card
        title="Joke!"
        body={
          <chakra.div>
            {data && (
              <chakra.span>
                {[data?.setup, data?.punchline]
                  .filter(Boolean)
                  .join(' ')
                  .trim()}
              </chakra.span>
            )}
            {!loading && !data && (
              <chakra.span>Something went wrong. 😆😆</chakra.span>
            )}
            {loading && !!data && <chakra.span marginRight={1} />}
            {loading && (
              <chakra.span color="GrayText" whiteSpace="nowrap">
                Loading...
              </chakra.span>
            )}
          </chakra.div>
        }
        footer={
          <Button
            onClick={refreshJoke}
            variant="outline"
            marginTop={4}
            isLoading={loading}
          >
            Refresh
          </Button>
        }
      />
    </>
  );
}
