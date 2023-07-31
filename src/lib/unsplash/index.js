import { UNSPLASH_ACCESS_KEY } from '@/utils/data/constants';
import axios from 'axios';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
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
