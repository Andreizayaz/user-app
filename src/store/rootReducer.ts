import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Auth';
import { friendsReducer } from './Friends';
import { newsReducer } from './News';

export const rootReducer = combineReducers({
  auth: authReducer,
  friends: friendsReducer,
  news: newsReducer
});
