import { call, put, takeLatest } from 'redux-saga/effects';

import { newsType } from './types';

import { getNews } from '../api';

import { setIsloading } from '../Loading';

import { setNews, fetchNews } from './reducer';

function* fetchNewsData() {
  try {
    yield put(setIsloading(true));
    const news: newsType[] = yield call(getNews);
    yield put(setNews(news));
    yield put(setIsloading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* newsSaga(): Generator {
  yield takeLatest(fetchNews.type, fetchNewsData);
}
