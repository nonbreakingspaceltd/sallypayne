import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Documents
import article from './documents/article';
import page from './documents/page';
// Objects
import meta from './objects/meta';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([article, page, meta]),
});
