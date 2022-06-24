import { call, put, takeLatest } from 'redux-saga/effects';

import { newsType } from 'src/store/News';
import { userType } from 'src/store/Friends';

import { setCurrentUser, fetchCurrentUser } from './reducer';

import { setIsloading } from '../Loading';

import { getCurrentUserData, getCurrentUserPosts } from '../api';
import { ActionType } from './types';
import { setAlert } from '../ErrorAlert';

function* fetchCurrentUserData(fetchCurrentUser: ActionType<number>) {
  try {
    yield put(setIsloading(true));
    const currentUserData: userType = yield call(() =>
      getCurrentUserData(fetchCurrentUser.payload)
    );
    const currentUserPosts: newsType[] = yield call(() =>
      getCurrentUserPosts(fetchCurrentUser.payload)
    );

    const {
      id,
      name,
      phone,
      address: { city, suite, street, zipcode, geo },
      email,
      website,
      company
    } = currentUserData;
    currentUserData;

    currentUserPosts &&
      currentUserPosts &&
      (yield put(
        setCurrentUser({
          id,
          name,
          phone,
          address: { city, suite, street, zipcode, geo },
          email,
          website,
          company,
          userPosts: currentUserPosts
        })
      ));

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

export function* currentUserSage(): Generator {
  yield takeLatest(fetchCurrentUser.type, fetchCurrentUserData);
}
