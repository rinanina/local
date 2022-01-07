import { Page } from 'features/Page';

import { buildRoute } from '../utils';

const routes = [
  Page.HOME,
  Page.ARCHIVE,
  Page.ARCHIVE_ITEM,
  Page.CREATE_STICKERBOOK,
  Page.ARTISTS,
  Page.ARTIST,
  Page.BLOG,
  Page.CONTACT,
  Page.PUBLISHER,
  Page.LOGIN,
  Page.NOT_FOUND,
].map((element) => buildRoute(element));

export { routes };
