import axios from 'axios';

const baseURL = '';

const httpClient = axios.create({ baseURL });

let HTTP_AUTH_TOKEN = localStorage.getItem('HTTP_AUTH_TOKEN') || '';

httpClient.interceptors.request.use((config) => {
  if (config.headers && HTTP_AUTH_TOKEN) {
    config.headers['Authorization'] = `Bearer ${HTTP_AUTH_TOKEN}`;
  }

  return config;
});

httpClient.interceptors.response.use((response) => {
  if (response?.data?.token) {
    HTTP_AUTH_TOKEN = response?.data?.token;
    localStorage.setItem('HTTP_AUTH_TOKEN', HTTP_AUTH_TOKEN);
  }

  return response;
});

export default httpClient;
