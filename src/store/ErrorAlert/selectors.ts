import { RootStateType } from '../index';
import { errorAlertType } from './types';

export const selectErrorAlert = (state: RootStateType): errorAlertType =>
  state.errorAlert.alert;
