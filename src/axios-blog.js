import axios from 'axios';

const instance = axios.create({
    // baseURL: 'https://api.kevinccapatinta.com/api/'
    baseURL: 'http://127.0.0.1:8001/api/'
});

export default instance;