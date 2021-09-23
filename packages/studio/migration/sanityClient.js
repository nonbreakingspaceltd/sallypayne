import sanityClient from 'part:@sanity/base/client';

export default (dataset = 'dev') => {
  return sanityClient.withConfig({
    dataset: dataset,
    apiVersion: 'v2020-03-15',
  });
};
