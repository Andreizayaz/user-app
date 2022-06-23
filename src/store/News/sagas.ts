import { call, put, takeLatest } from 'redux-saga/effects';

import { newsType } from './types';

import { getNews } from '../api';

import { setIsloading } from '../Loading';

import { setNews, fetchNews } from './reducer';
import { setAlert } from '../ErrorAlert';

function* fetchNewsData() {
  try {
    yield put(setIsloading(true));
    const news: newsType[] = yield call(getNews);
    news && (yield put(setNews(news)));
    yield put(setIsloading(false));
  } catch (error: Error | any) {
    yield put(
      setAlert({
        isVisibleAlert: true,
        alertMessage: error.text || 'Network error'
      })
    );
    yield put(setIsloading(false));
    console.log(error);
  }
}

export function* newsSaga(): Generator {
  yield takeLatest(fetchNews.type, fetchNewsData);
}
