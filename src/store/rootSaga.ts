import { all } from 'redux-saga/effects';

import { friendsSaga } from './Friends';
import { newsSaga } from './News';
import { currentUserSage } from './CurrentUser';

export default function* rootSaga(): Generator {
  yield all([friendsSaga(), newsSaga(), currentUserSage()]);
}
