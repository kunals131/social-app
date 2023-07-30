import axios from 'axios';

const access_key = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || '';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${access_key}`,
  },
});

unsplash.interceptors.response.use(
  (response) => response,
  (error) => {
    const { data } = error.response;
    if (typeof data == 'string' && data.includes('Rate Limit Exceeded')) {
      if (typeof window !== 'undefined') {
        window.location.href = '/error';
      }
    }
    return Promise.reject(error);
  }
);
