import { UNSPLASH_ACCESS_KEY } from '@/utils/data/constants';
import axios from 'axios';
import { parseErrorMessage } from './utils';

export const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
  
});

unsplash.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    let errMessage = parseErrorMessage(error);
    if (errMessage?.includes('Rate Limit Exceeded')) {
      if (typeof window !== 'undefined') {
        window.location.href = '/error';
      }
    }
    return Promise.reject(error);
  }
);
