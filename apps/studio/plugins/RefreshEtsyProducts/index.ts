import { BiRefresh } from 'react-icons/bi';
import { definePlugin } from 'sanity';
import { RefreshEtsyProductsTool } from './RefreshEtsyProductsTool';

export const refreshEtsyProducts = definePlugin({
  name: 'refresh-etsy-products',
  tools: [
    {
      name: 'refresh-etsy-products',
      title: 'Refresh Etsy products',
      icon: BiRefresh,
      component: RefreshEtsyProductsTool,
    },
  ],
});
