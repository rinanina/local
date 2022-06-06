import { pages, Page } from 'features/Page';

export const buildPath = (
  page: Page,
  root = '/',
  prefix = '',
  suffix = '',
) =>
  `${root}${page}${prefix}${suffix}*`;

export const buildRoute = (page: Page, exact = true) => {
  const Component = pages[page];

  return {
    path: buildPath(page),
    element: Component,
    exact,
    // page,
  };
};
