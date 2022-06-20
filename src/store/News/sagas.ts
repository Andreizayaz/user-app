import { call, put, takeLatest } from 'redux-saga/effects';

import { newsType } from './types';

import { getNews } from '../api';

import { setNews, fetchNews } from './reducer';

function* fetchNewsData() {
  try {
    const news: newsType[] = yield call(getNews);
    yield put(setNews(news));
  } catch (error) {
    console.log(error);
  }
}

export function* newsSaga(): Generator {
  yield takeLatest(fetchNews.type, fetchNewsData);
}
