import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchUsers, setUser } from './reducer';

import { userType } from './types';

import { getFriends } from '../api';

function* fetchFriendsData() {
  try {
    const friends: userType[] = yield call(getFriends);
    yield put(setUser(friends));
  } catch (error) {
    console.log(error);
  }
}

export function* friendsSaga(): Generator {
  yield takeLatest(fetchUsers.type, fetchFriendsData);
}
