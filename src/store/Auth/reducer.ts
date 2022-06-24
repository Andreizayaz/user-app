import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { errorMessageType, userDataType } from './types';

type initialStateType = {
  isAuth: boolean;
  errorMessage: errorMessageType;
  userData: userDataType;
};

const initialState: initialStateType = {
  isAuth: false,
  errorMessage: null,
  userData: null
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },

    setUser: (state, action: PayloadAction<userDataType>) => {
      state.userData = action.payload;
    },

    setErrorMessage: (state, action: PayloadAction<errorMessageType>) => {
      state.errorMessage = action.payload;
    }
  }
});

export const { setAuth, setUser, setErrorMessage } = slice.actions;
const authReducer = slice.reducer;
export default authReducer;
