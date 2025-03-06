import { BiCog } from 'react-icons/bi';
import type { StructureBuilder } from 'sanity/structure';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(BiCog)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
    ]);
