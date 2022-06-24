import { RootStateType } from '../index';

export const selectIsLoading = (state: RootStateType): boolean =>
  state.loading.isLoading;
