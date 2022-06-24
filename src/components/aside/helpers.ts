import { getAvailableLinksFunctionType } from './types';
import { getLinks } from 'src/helpers';
import { links, asideNav, unloggedUserNav } from 'src/data';

export const getAvailableLinks: getAvailableLinksFunctionType = (
  isAuth,
  isVisibleLinks
) => {
  if (isAuth || isVisibleLinks) {
    return getLinks(links, asideNav);
  } else {
    return getLinks(links, unloggedUserNav);
  }
};
