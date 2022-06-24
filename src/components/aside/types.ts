import { LinkType } from 'src/types';

export type ClassesType = {
  listClasses: string;
  listItemClases: string;
  linkClasses: string;
};

export type getAvailableLinksFunctionType = (
  isAuth: boolean,
  isVisibleLinks: boolean
) => LinkType[] | undefined;
