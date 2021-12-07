import axios from 'axios';

const baseUrl = '';

const httpClient = axios.create({ baseUrl });

export default httpClient;
