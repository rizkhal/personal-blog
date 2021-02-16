const http = async (url, options) => {
  const opt = {
    options,
    headers: {
      authorization: process.env.VUE_APP_ACCESS_TOKEN,
    },
  };

  const response = await fetch(url, opt);
  return await response.json();
};

export default http;
