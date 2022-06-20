import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Auth';
import { friendsReducer } from './Friends';

export const rootReducer = combineReducers({
  auth: authReducer,
  friends: friendsReducer
});
