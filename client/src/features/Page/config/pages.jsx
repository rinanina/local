import React from 'react';

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

export const Page = {
  HOME: '',
  ARCHIVE: '/archive',
  ARCHIVE_ITEM: '/archive/:id',
  ARTISTS: '/artists',
  ARTIST: '/artists/:id',
  BLOG: '/blog',
  CONTACT: '/contact',
  PUBLISHER: '/publisher',
  LOGIN: '/login',
  NOT_FOUND: '*',
};

export const pages = {
  [Page.HOME]: <Home />,
  [Page.ARCHIVE]: <Archive />,
  [Page.ARCHIVE_ITEM]: <ArchiveItem />,
  [Page.ARTISTS]: <Artists />,
  [Page.ARTIST]: <Artist />,
  [Page.BLOG]: <Blog />,
  [Page.CONTACT]: <Contact />,
  [Page.PUBLISHER]: <Publisher />,
  [Page.LOGIN]: <Login />,
  [Page.NOT_FOUND]: <NotFound />,
};
