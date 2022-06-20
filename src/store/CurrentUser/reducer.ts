import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { currentUserType } from './types';

type initialStateType = {
  currentUser: currentUserType;
};

const initialState: initialStateType = {
  currentUser: {
    id: 0,
    name: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: ''
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    },
    userPosts: [{ userId: 0, id: 0, title: '', body: '' }]
  }
};

const slice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<currentUserType>) => {
      state.currentUser = action.payload;
    },

    fetchCurrentUser: (state) => {
      state.currentUser;
    }
  }
});

export const { setCurrentUser, fetchCurrentUser } = slice.actions;
export const currentUserReducer = slice.reducer;
