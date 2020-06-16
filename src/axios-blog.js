import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://ec2-18-191-233-225.us-east-2.compute.amazonaws.com/api/'
});

export default instance;