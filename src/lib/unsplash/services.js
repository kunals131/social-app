import { unsplash } from '.';

export const getPhotosList = () =>
  unsplash
    .get('/photos', {
      params: {
        per_page: per_page,
        page: page,
      },
    })
    .then((res) => res.data);

export const getRandomPhotos = () =>
  unsplash
    .get('/photos/random', {
      params: {
        count: 10,
      },
    })
    .then((res) => res.data);

export const getCollections = (page = 1, per_page = 10) =>
  unsplash
    .get('/collections', {
      params: {
        per_page: per_page,
        page: page,
      },
    })
    .then((res) => res.data);

export const getTopics = (page = 1, per_page = 10, order_by = 'featured') =>
  unsplash.get('/topics', {
    params: {
      per_page: per_page,
      page: page,
      order_by: order_by,
    },
  }).then(res=>res.data);
