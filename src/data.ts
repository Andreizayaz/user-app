import {
  HOME_LINK,
  LOGIN_LINK,
  PROFILE_LINK,
  FRIENDS_LINK,
  NEWS_LINK,
  HOME,
  LOGIN,
  PROFILE,
  FRIENDS,
  NEWS
} from 'src/constants';

import { LinkType } from './types';

export const links: LinkType[] = [
  {
    link: HOME_LINK,
    linkName: HOME
  },
  {
    link: LOGIN_LINK,
    linkName: LOGIN
  },
  {
    link: PROFILE_LINK,
    linkName: PROFILE
  },
  {
    link: FRIENDS_LINK,
    linkName: FRIENDS
  },
  {
    link: NEWS_LINK,
    linkName: NEWS
  }
];

export const headerNav = [LOGIN];
export const asideNav = [HOME, PROFILE, FRIENDS, NEWS];
export const unloggedUserNav = [HOME, NEWS];
