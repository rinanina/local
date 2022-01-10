import httpClient from './httpClient';
import { Endpoint } from '../config/endpoints';

const builder = (httpClient) => ({
  user: {
    register: (data) => httpClient.post(Endpoint.REGISTER, data),
    login: (data) => httpClient.post(Endpoint.LOGIN, data),
  },
  stickerbooks: {
    create: (data) => {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      };
      

      return httpClient.post(
        Endpoint.CREATE_STICKERBOOK,
        data,
        // TODO: Convert request data from JSON to FormData
        // jsonToFormData(data),
        config
      );
    },
    loadAll: () => httpClient.get(Endpoint.LOAD_STICKERBOOKS),
    loadOne: (id) => httpClient.get(`${Endpoint.LOAD_STICKERBOOKS}/${id}`),
  },
  artists: {
    create: (data) => httpClient.post(Endpoint.CREATE_ARTIST, data),
    loadAll: () => httpClient.get(Endpoint.LOAD_ARTISTS),
    loadOne: (id) => httpClient.get(`${Endpoint.LOAD_ARTISTS}/${id}`),
  },
  posts: {
    create: (data) => httpClient.post(Endpoint.CREATE_POST, data),
    loadAll: () => httpClient.get(Endpoint.LOAD_POSTS),
    loadOne: (id) => httpClient.get(`${Endpoint.LOAD_POSTS}/${id}`),
  },
});

export default builder(httpClient);
