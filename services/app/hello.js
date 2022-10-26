import axios from 'axios';

/**
 * Helper function to call the serverless apis
 * and we can also call external apis.
 */
const hello = async ({
  method = 'GET',
  url,
  externalUrl = '',
  data = {},
  headers = {},
}) => {
  try {
    const config = {};
    config.method = method;
    config.url =
      externalUrl !== '' ? externalUrl : process.env.NEXT_PUBLIC_API_URL + url;
    config.headers = { ...headers };

    if (method !== 'GET' && method !== 'DELETE') {
      config.data = data;
    }

    const response = await axios(config);
    console.log(response.status);
    if (response.status == 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default hello;
