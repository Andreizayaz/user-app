import { RootStateType } from '../index';
import { currentUserType } from './types';

export const selectCurrentUser = (state: RootStateType): currentUserType =>
  state.currentUser.currentUser;
