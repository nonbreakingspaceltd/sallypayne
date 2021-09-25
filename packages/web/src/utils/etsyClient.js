const etsyClient = (token) => {
  const hasToken = token && token.length > 0;
  const endpoint = 'https://openapi.etsy.com/v3/application';

  // Parse JSON and throw on bad responses
  const responseHandler = async (response) => {
    if (response.status >= 400) {
      throw new Error([response.status, response.statusText].join(' '));
    }
    const data = await response.json();
    return data;
  };

  return {
    fetch: async (path) => {
      const url = new URL([endpoint, path].join(''));

      // console.log(url.toString(), hasToken, token);

      return (
        fetch(url.toString(), {
          method: 'GET',
          headers: hasToken && {
            'x-api-key': token,
          },
        })
          .then(responseHandler)
          // The query results are in the `result` property
          .then((json) => json)
      );
    },
  };
};

export const config = {
  storeId: process.env.ETSY_STORE_ID,
  token: process.env.ETSY_API_TOKEN,
};

export const client = etsyClient(config.token);
