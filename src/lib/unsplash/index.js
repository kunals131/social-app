import axios from "axios";

const access_key = 'OD0IdnUDmXweXm4a5uVxg8TlslC4lW9moHigkzKdRls'

export const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        'Authorization' : `Client-ID ${access_key}`
    }
})