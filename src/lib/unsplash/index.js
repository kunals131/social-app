import axios from "axios";

const access_key = 'MfnYS0Dd9ScNxtnh5Iluf6JL-COWQEfnaFlsc0ZFzp8'

export const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        'Authorization' : `Client-ID ${access_key}`
    }
})