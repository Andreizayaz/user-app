import { RootStateType } from '../index';

export const selectIsVisibleLinks = (state: RootStateType): boolean =>
  state.visibleLinks.isVisibleLinks;
