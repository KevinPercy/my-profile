import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ec2-18-218-192-61.us-east-2.compute.amazonaws.com/api/'
    // baseURL: 'http://127.0.0.1:8001/api/'
});

export default instance;