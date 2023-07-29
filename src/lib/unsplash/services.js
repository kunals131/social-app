import { unsplash } from ".";

export const getPhotosList =()=> unsplash.get('/photos', {
    params : {
        per_page : per_page,
        page : page,
    }
}).then(res=>res.data);

export const getRandomPhotos =()=> unsplash.get('/photos/random', {
    params : {
        count : 10
    }
}).then(res=>res.data);