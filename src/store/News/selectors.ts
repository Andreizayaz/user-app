import { RootStateType } from '../index';
import { newsType } from './types';

export const selectNews = (state: RootStateType): newsType[] => state.news.news;
