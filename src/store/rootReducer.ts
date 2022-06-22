import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Auth';
import { friendsReducer } from './Friends';
import { newsReducer } from './News';
import { currentUserReducer } from './CurrentUser';
import { visibleLinksReducer } from './VisibleLinks';
import { loadingReducer } from './Loading';

export const rootReducer = combineReducers({
  auth: authReducer,
  friends: friendsReducer,
  news: newsReducer,
  currentUser: currentUserReducer,
  visibleLinks: visibleLinksReducer,
  loading: loadingReducer
});
