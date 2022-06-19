import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './Auth';

export const rootReducer = combineReducers({
  auth: authReducer
});
