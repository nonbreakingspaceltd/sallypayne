import { Box, Button, Card, Container, Stack, Text } from '@sanity/ui';
import { useCallback, useState } from 'react';
import { useClient } from 'sanity';

const WEB_URL =
  process.env.SANITY_STUDIO_WEB_URL || 'https://www.sallypayne.com';
const PRODUCTS_ENDPOINT = `${WEB_URL}/api/etsy-products.json`;

interface ProductDocument {
  _id: string;
  _type: 'product';
  listingId: number;
  title: string;
}

type Status =
  | { state: 'idle' }
  | { state: 'running'; message: string }
  | { state: 'done'; message: string }
  | { state: 'error'; message: string };

export function RefreshEtsyProductsTool() {
  const client = useClient({ apiVersion: '2024-05-01' });
  const [status, setStatus] = useState<Status>({ state: 'idle' });

  const refresh = useCallback(async () => {
    try {
      setStatus({ state: 'running', message: 'Fetching products from Etsy…' });
      const response = await fetch(PRODUCTS_ENDPOINT);
      if (!response.ok) {
        throw new Error(`The website returned an error (${response.status})`);
      }
      const { products } = (await response.json()) as {
        products: ProductDocument[];
      };
      if (!products?.length) {
        throw new Error('Etsy returned no products, so nothing was changed');
      }

      setStatus({
        state: 'running',
        message: `Saving ${products.length} products…`,
      });
      let transaction = client.transaction();
      for (const product of products) {
        transaction = transaction.createOrReplace(product);
      }
      await transaction.commit();

      setStatus({ state: 'running', message: 'Removing old products…' });
      const staleIds = await client.fetch<string[]>(
        `*[_type == 'product' && !(_id in $ids)]._id`,
        { ids: products.map((product) => product._id) },
      );
      if (staleIds.length) {
        let deletion = client.transaction();
        for (const id of staleIds) {
          deletion = deletion.delete(id);
        }
        await deletion.commit();
      }

      setStatus({
        state: 'done',
        message: `Done! Synced ${products.length} products from Etsy${
          staleIds.length ? ` and removed ${staleIds.length} old ones` : ''
        }. The shop on the website is up to date.`,
      });
    } catch (error) {
      setStatus({
        state: 'error',
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }, [client]);

  const running = status.state === 'running';

  return (
    <Container width={1}>
      <Box padding={4}>
        <Stack space={4}>
          <Card
            padding={4}
            radius={3}
            shadow={1}
          >
            <Stack space={4}>
              <Text
                size={2}
                weight="semibold"
              >
                Refresh Etsy products
              </Text>
              <Text
                size={1}
                muted
              >
                Pulls the latest products from the Etsy shop and updates the
                website. Changes appear on the shop straight away — no deploy
                needed. This usually takes a few seconds.
              </Text>
              <Button
                text={running ? 'Refreshing…' : 'Refresh Etsy products'}
                tone="primary"
                disabled={running}
                onClick={refresh}
              />
            </Stack>
          </Card>
          {status.state !== 'idle' && (
            <Card
              padding={4}
              radius={3}
              shadow={1}
              tone={
                status.state === 'error'
                  ? 'critical'
                  : status.state === 'done'
                    ? 'positive'
                    : 'default'
              }
            >
              <Text size={1}>{status.message}</Text>
            </Card>
          )}
        </Stack>
      </Box>
    </Container>
  );
}
