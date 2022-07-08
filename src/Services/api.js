import axios from 'axios';

export const api = axios.create(
    {
        baseURL : 'https://trackingapi.hashching.org',
        headers: {}
    }
);

