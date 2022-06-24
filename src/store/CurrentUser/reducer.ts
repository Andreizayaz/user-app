import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { currentUserType } from './types';

type initialStateType = {
  currentUser: currentUserType | null;
};

const initialState: initialStateType = {
  currentUser: null
};

const slice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<currentUserType | null>) => {
      state.currentUser = action.payload;
    }
  }
});

export const fetchCurrentUser = createAction<number>('get/currentUser');

export const { setCurrentUser } = slice.actions;
export const currentUserReducer = slice.reducer;
