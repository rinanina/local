import { AxiosInstance } from 'axios';

import httpClient from './httpClient';
import { Endpoint } from '../config/endpoints';

type Config = {
  [key: string]: boolean | string | number | object | undefined;
};

const builder = (httpClient: AxiosInstance) => ({
  user: {
    register: (data: Config) => httpClient.post(Endpoint.REGISTER, data),
    login: (data: Config) => httpClient.post(Endpoint.LOGIN, data),
  },
  stickerbooks: {
    create: (data: Config) => httpClient.post(Endpoint.CREATE_STICKER_BOOK, data),
    loadAll: () => httpClient.get(Endpoint.LOAD_STICKER_BOOKS),
    loadOne: (id: Config) => httpClient.get(`${Endpoint.LOAD_STICKER_BOOKS}/${id}`)
  },
  artists: {
    create: (data: Config) => httpClient.post(Endpoint.CREATE_ARTIST, data),
    loadAll: () => httpClient.get(Endpoint.LOAD_ARTISTS),
    loadOne: (id: string) => httpClient.get(`${Endpoint.LOAD_ARTISTS}/${id}`)
  },
  posts: {
    create: (data: Config) => httpClient.post(Endpoint.CREATE_POST, data),
    loadAll: () => httpClient.get(Endpoint.LOAD_POSTS),
    loadOne: (id: string) => httpClient.get(`${Endpoint.LOAD_POSTS}/${id}`)
  }
});

export default builder(httpClient);
