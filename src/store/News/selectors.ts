import { RootStateType } from '../index';
import { newsType } from './types';

export const selectNews = (state: RootStateType): newsType[] | null =>
  state.news.news;
