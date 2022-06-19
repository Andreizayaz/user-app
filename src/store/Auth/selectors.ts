import { RootStateType } from '../index';
import { errorMessageType } from './types';

export const selectAuth = (state: RootStateType): boolean => state.auth.isAuth;

export const selectErrorMessage = (state: RootStateType): errorMessageType =>
  state.auth.errorMessage;
