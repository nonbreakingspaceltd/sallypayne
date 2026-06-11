import type { APIRoute } from 'astro';
import { fetchEtsyProductDocuments } from '../../data/etsySync';

export const prerender = false;

// The studio's "Refresh Etsy products" tool runs in the browser, where the
// Etsy API can't be called directly (no CORS, and the credentials live here
// on the server). This endpoint does the Etsy fetch and returns the products
// shaped as Sanity documents; the studio writes them to the dataset with the
// logged-in editor's own permissions.
const allowedOrigins = [
  'https://www.sanity.io',
  'https://sallypayne.sanity.studio',
  'http://localhost:3333',
];

function corsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('origin');
  if (!origin || !allowedOrigins.includes(origin)) {
    return {};
  }
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    Vary: 'Origin',
  };
}

export const OPTIONS: APIRoute = ({ request }) => {
  return new Response(null, { status: 204, headers: corsHeaders(request) });
};

export const GET: APIRoute = async ({ request }) => {
  try {
    const products = await fetchEtsyProductDocuments();
    return new Response(JSON.stringify({ products }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
        ...corsHeaders(request),
      },
    });
  } catch (error) {
    console.error('Failed to fetch products from Etsy:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch products from Etsy' }),
      {
        status: 502,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders(request),
        },
      },
    );
  }
};
