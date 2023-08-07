import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BACKEND_SERVER_HOST,
  withCredentials: false,
});

export default api;
