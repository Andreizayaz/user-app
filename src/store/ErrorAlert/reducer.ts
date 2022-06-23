import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { errorAlertType } from './types';

type initialStateType = {
  alert: errorAlertType;
};

const initialState: initialStateType = {
  alert: {
    isVisibleAlert: false,
    alertMessage: null
  }
};

const slice = createSlice({
  name: 'errorAlert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<errorAlertType>) => {
      state.alert = action.payload;
    }
  }
});

export const { setAlert } = slice.actions;
export const alertReducer = slice.reducer;
