import httpClient from './httpClient';
import { Endpoint } from '../config/endpoints';

const builder = (httpClient) => ({
  user: {
    register: (data) => httpClient.post(Endpoint.REGISTER, data),
    login: (data) => httpClient.post(Endpoint.LOGIN, data),
  },
  stickerbook: {
    create: (data) => httpClient.post(Endpoint.CREATE_STICKERBOOK, data),
  }
});

export default builder(httpClient);
