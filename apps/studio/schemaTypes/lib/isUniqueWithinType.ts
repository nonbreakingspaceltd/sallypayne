import type { SlugValidationContext } from 'sanity';

/**
 * Scopes slug uniqueness to documents of the same `_type`.
 *
 * Sanity's default slug uniqueness check spans *all* document types, so a
 * `work` document can't be published if its slug is already used by, say, a
 * `post`. Different document types live at different URL paths, so sharing a
 * slug across types is harmless — we only need each slug to be unique within
 * its own type. Pass this as the slug field's `isUnique` option.
 */
export async function isUniqueWithinType(
  slug: string,
  context: SlugValidationContext,
): Promise<boolean> {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: '2024-01-01' });

  const id = document?._id.replace(/^drafts\./, '');
  const params = {
    draft: `drafts.${id}`,
    published: id,
    type: document?._type,
    slug,
  };

  const query = /* groq */ `!defined(*[
    _type == $type &&
    !(_id in [$draft, $published]) &&
    slug.current == $slug
  ][0]._id)`;

  return client.fetch<boolean>(query, params);
}
