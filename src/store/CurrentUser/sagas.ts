import { call, put, takeLatest } from 'redux-saga/effects';

import { newsType } from 'src/store/News';
import { userType } from 'src/store/Friends';

import { setCurrentUser, fetchCurrentUser } from './reducer';

import { setIsloading } from '../Loading';

import { getCurrentUserData, getCurrentUserPosts } from '../api';

function* fetchCurrentUserData() {
  yield put(setIsloading(true));
  const currentUserData: userType[] = yield call(getCurrentUserData);
  const currentUserPosts: newsType[] = yield call(getCurrentUserPosts);

  const { id, name, phone, address, email, website, company } =
    currentUserData[0];
  currentUserData;

  yield put(
    setCurrentUser({
      id,
      name,
      phone,
      address,
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
