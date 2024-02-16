export const fixPathSlashes = (str) => str.replace(/^\/?([^/]+(?:\/[^/]+)*)\/?$/, '/$1/' || '/').replace(/\/\//g, "/");
