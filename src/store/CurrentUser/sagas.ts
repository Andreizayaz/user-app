import { call, put, takeLatest } from 'redux-saga/effects';

import { newsType } from 'src/store/News';
import { userType } from 'src/store/Friends';

import { setCurrentUser, fetchCurrentUser } from './reducer';

import { setIsloading } from '../Loading';

import { getCurrentUserData, getCurrentUserPosts } from '../api';
import { ActionType } from './types';

function* fetchCurrentUserData(fetchCurrentUser: ActionType<number>) {
  yield put(setIsloading(true));
  const currentUserData: userType[] = yield call(() =>
    getCurrentUserData(fetchCurrentUser.payload)
  );
  const currentUserPosts: newsType[] = yield call(() =>
    getCurrentUserPosts(fetchCurrentUser.payload)
  );

  const {
    id,
    name,
    phone,
    address: { city, suite, street, zipcode },
    email,
    website,
    company
  } = currentUserData[0];
  currentUserData;

  yield put(
    setCurrentUser({
      id,
      name,
      phone,
      address: { city, suite, street, zipcode },
      email,
      website,
      company,
      userPosts: currentUserPosts
    })
  );

  yield put(setIsloading(false));
}

export function* currentUserSage(): Generator {
  yield takeLatest(fetchCurrentUser.type, fetchCurrentUserData);
}
