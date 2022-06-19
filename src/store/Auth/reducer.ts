import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { errorMessageType } from './types';

type initialStateType = {
  isAuth: boolean;
  errorMessage: errorMessageType;
};

const initialState: initialStateType = {
  isAuth: false,
  errorMessage: null
};

const slise = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },

    setErrorMessage: (state, action: PayloadAction<errorMessageType>) => {
      state.errorMessage = action.payload;
    }
  }
});

export const { setAuth, setErrorMessage } = slise.actions;
const authReducer = slise.reducer;
export default authReducer;
