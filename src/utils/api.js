import axios from 'axios';

const client = axios.create({
    baseURL: process.env.API_GATEWAY,
    headers: {
      Accept: 'application/json, text/javascript',
      'Content-Type': 'application/json',
    },
  });
  

  export default client;