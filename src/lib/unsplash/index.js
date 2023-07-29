import axios from "axios";

const access_key = '-m4cw7kLCM3Jpg4eHkmri8t8WrvAlxw5r5ZXTfNx5dE'

export const unsplash = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        'Authorization' : `Client-ID ${access_key}`
    }
})