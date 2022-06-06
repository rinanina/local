import React from 'react';

import { Page, PageElement } from './types';
import Archive from '../components/Archive';
import ArchiveItem from '../components/ArchiveItem';
import Artist from '../components/Artist';
import Artists from '../components/Artists';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Login from '../components/Login';
import NotFound from '../components/NotFound';
import Publisher from '../components/Publisher';
import CreateStickerBook from '../components/CreateStickerBook';

export const pages: Record<Page, PageElement> = {
  [Page.HOME]: <Home />,
  [Page.ARCHIVE]: <Archive />,
  [Page.ARCHIVE_ITEM]: <ArchiveItem />,
  [Page.CREATE_STICKER_BOOK]: <CreateStickerBook />,
  [Page.ARTISTS]: <Artists />,
  [Page.ARTIST]: <Artist />,
  [Page.BLOG]: <Blog />,
  [Page.CONTACT]: <Contact />,
  [Page.PUBLISHER]: <Publisher />,
  [Page.LOGIN]: <Login />,
  [Page.NOT_FOUND]: <NotFound />,
};
