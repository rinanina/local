import { pages } from 'features/Page';

export const buildPath = (page, root = '/', prefix = '', suffix = '') =>
  `${root}${page}${prefix}${suffix}`;

export const buildRoute = (page, exact = true) => {
  const Component = pages[page];

  return {
    path: buildPath(page),
    element: Component,
    exact,
    // page,
  };
};
