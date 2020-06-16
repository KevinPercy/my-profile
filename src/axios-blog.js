import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ec2-18-191-233-225.us-east-2.compute.amazonaws.com/api/'
    // baseURL: 'http://127.0.0.1:8001/api/'
});

export default instance;