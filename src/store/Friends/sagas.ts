import { call, put, takeLatest } from 'redux-saga/effects';

import { setIsloading } from '../Loading';

import { fetchUsers, setFriends } from './reducer';

import { userType } from './types';

import { getFriends } from '../api';
import { setAlert } from '../ErrorAlert';

function* fetchFriendsData() {
  try {
    yield put(setIsloading(true));
    const friends: userType[] = yield call(getFriends);
    friends && (yield put(setFriends(friends)));
    yield put(setIsloading(false));
  } catch (error: Error | any) {
    yield put(
      setAlert({
        isVisibleAlert: true,
        alertMessage: error.text || 'Network Error'
      })
    );
    yield put(setIsloading(false));
    console.log(error);
  }
}

export function* friendsSaga(): Generator {
  yield takeLatest(fetchUsers.type, fetchFriendsData);
}
