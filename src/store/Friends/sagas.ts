import { call, put, takeLatest } from 'redux-saga/effects';

import { setIsloading } from '../Loading';

import { fetchUsers, setUser } from './reducer';

import { userType } from './types';

import { getFriends } from '../api';

function* fetchFriendsData() {
  try {
    yield put(setIsloading(true));
    const friends: userType[] = yield call(getFriends);
    yield put(setUser(friends));
    yield put(setIsloading(false));
  } catch (error) {
    console.log(error);
  }
}

export function* friendsSaga(): Generator {
  yield takeLatest(fetchUsers.type, fetchFriendsData);
}
