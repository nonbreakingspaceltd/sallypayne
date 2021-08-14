const sanityClient = (options) => {
  const { useCdn, projectId, dataset, token } = options;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn && !hasToken ? "apicdn.sanity.io" : "api.sanity.io";
  const endpoint = `https://${projectId}.${baseHost}/v1/data/query/${dataset}`;

  // Parse JSON and throw on bad responses
  const responseHandler = (response) => {
    if (response.status >= 400) {
      throw new Error([response.status, response.statusText].join(" "));
    }
    return response.json();
  };

  // We need to prefix groq query params with `$` and quote the strings
  const transformedParams = (parameters) =>
    Object.keys(parameters).reduce((prev, key) => {
      prev[`$${key}`] = JSON.stringify(parameters[key]);
      return prev;
    }, {});

  return {
    fetch: async (query, parameters) => {
      const urlParams = new URLSearchParams({
        query,
        ...(parameters && transformedParams(parameters)),
      });

      const url = new URL([endpoint, urlParams].join("?"));

      return (
        fetch(url.toString(), {
          method: 'GET',
          headers: hasToken && {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(responseHandler)
          // The query results are in the `result` property
          .then((json) => json.result)
      );
    },
  };
};

export const client = sanityClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  token: process.env.SANITY_STUDIO_API_TOKEN,
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  useCdn: false,
});


