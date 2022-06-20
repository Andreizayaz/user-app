import { all } from 'redux-saga/effects';

import { friendsSaga } from './Friends';

export default function* rootSaga(): Generator {
  yield all([friendsSaga()]);
}
