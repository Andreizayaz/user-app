import { RootStateType } from '../index';
import { userType } from './types';

export const selectFriends = (state: RootStateType): userType[] =>
  state.friends.friends;
