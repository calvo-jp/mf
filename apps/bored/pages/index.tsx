import { Button, chakra, Text } from '@chakra-ui/react';
import { Card, useGlobalStore } from '@mf/common';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import randomActivity, { Activity } from '../utils/randomActivity';

export default function Bored() {
  const authenticated = useGlobalStore((o) => o.authenticated);

  const [data, setData] = useState<Activity | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshActivity = useCallback(async () => {
    try {
      setLoading(true);
      setData(await randomActivity());
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshActivity();
  }, [refreshActivity]);

  useEffect(() => {
    setData(null);
    setLoading(true);
  }, []);

  return (
    <>
      <Head>
        <title>Bored</title>
      </Head>

      {authenticated && (
        <Text marginBottom={4} fontSize="sm">
          You are logged in
        </Text>
      )}

      <Card
        title="Bored?"
        body={
          <chakra.div>
            {data && <chakra.span>{data.activity}</chakra.span>}
            {!loading && !data && (
              <chakra.span>Something went wrong. 😟😔</chakra.span>
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
            onClick={refreshActivity}
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
