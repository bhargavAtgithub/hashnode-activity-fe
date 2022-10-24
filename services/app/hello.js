import axios from 'axios';

const hello = async (method = 'GET', url, data = {}) => {
  try {
    const config = {};
    config.method = method;
    config.url = process.env.NEXT_PUBLIC_API_URL + url;
    config.headers = {};

    if (method !== 'GET' && method !== 'DELETE') {
      config.data = data;
    }

    const response = await axios(config);

    if (response.status == 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default hello;
