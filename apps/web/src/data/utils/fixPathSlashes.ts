export const fixPathSlashes = (str: string) =>
  str.replace(/^\/?([^/]+(?:\/[^/]+)*)\/?$/, '/$1/').replace(/\/\//g, '/');
