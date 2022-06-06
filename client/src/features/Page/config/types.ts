import { ComponentType, LazyExoticComponent, FC, FunctionComponent, JSXElementConstructor, ReactElement } from 'react';

enum Page {
  HOME = '',
  ARCHIVE = '/archive',
  ARCHIVE_ITEM = '/archive/:id',
  CREATE_STICKER_BOOK = '/create-stickerbook',
  // CREATE_TAPE = '/create-tape',
  ARTISTS = '/artists',
  ARTIST = '/artists/:id',
  BLOG = '/blog',
  CONTACT = '/contact',
  PUBLISHER = '/publisher',
  LOGIN = '/login',
  NOT_FOUND = '*',
}

type PageElement = ReactElement<any, string | JSXElementConstructor<any>> | null | undefined;

export { Page };
export type { PageElement };
