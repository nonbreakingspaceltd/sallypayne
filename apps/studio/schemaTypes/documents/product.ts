import { createElement } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

// Synced from Etsy by the "Refresh Etsy products" tool — not edited by hand.
// Every field is read-only and the type is hidden from the new-document menu
// (see newDocumentOptions in sanity.config.ts).
export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: BiShoppingBag,
  liveEdit: true,
  readOnly: true,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'string',
    }),
    defineField({
      name: 'listingId',
      title: 'Etsy listing ID',
      type: 'number',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Etsy URL',
      type: 'url',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
    defineField({
      name: 'priceAmount',
      title: 'Price amount',
      type: 'string',
    }),
    defineField({
      name: 'currencyCode',
      title: 'Currency code',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description (HTML)',
      type: 'text',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        defineField({ name: 'src', title: 'URL', type: 'url' }),
        defineField({ name: 'width', title: 'Width', type: 'number' }),
        defineField({ name: 'height', title: 'Height', type: 'number' }),
        defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
        defineField({
          name: 'backgroundColor',
          title: 'Background colour',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      price: 'price',
      imageUrl: 'image.src',
    },
    prepare({ title, price, imageUrl }) {
      return {
        title,
        subtitle: price,
        media: imageUrl
          ? createElement('img', {
              src: imageUrl,
              alt: '',
              style: { objectFit: 'cover', width: '100%', height: '100%' },
            })
          : BiShoppingBag,
      };
    },
  },
});
