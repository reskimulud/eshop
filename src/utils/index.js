const getBaseUrl = () => {
  const host = process.env.REACT_APP_API_HOST;
  const port = process.env.REACT_APP_API_PORT;

  if (port == 443) {
    return `https://${host}`
  }

  return `http://${host}:${port}`
};

export default getBaseUrl;
