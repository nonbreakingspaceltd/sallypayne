import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Documents
import category from './documents/category';
import page from './documents/page';
import post from './documents/post';
import settings from './documents/settings';
// Objects
import meta from './objects/meta';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Documents
    category,
    page,
    post,
    settings,
    // Objects
    meta,
  ]),
});
