import S from '@sanity/desk-tool/structure-builder';
import { BiCog } from 'react-icons/bi';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(BiCog)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('post').title('Posts'),
      S.divider(),
      S.documentTypeListItem('category').title('Categories'),
    ]);
