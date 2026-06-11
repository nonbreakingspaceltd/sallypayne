/**
 * Parse the rest-param of a paginated listing route into a page number.
 * Mirrors the URLs paginate() used to generate: page 1 lives at the base
 * path only, deeper pages at /2, /3, … Anything else is not a page URL.
 */
export function parsePageParam(param: string | undefined): number | undefined {
  if (param === undefined || param === '') {
    return 1;
  }
  if (!/^\d+$/.test(param)) {
    return undefined;
  }
  const page = Number.parseInt(param, 10);
  return page >= 2 ? page : undefined;
}
