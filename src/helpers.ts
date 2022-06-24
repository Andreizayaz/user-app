import { getLinksFunctionType } from './types';

export const getLinks: getLinksFunctionType = (links, linksNames) =>
  links.filter((item) => linksNames.includes(item.linkName));
