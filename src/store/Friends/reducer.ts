import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userType } from './types';

type initialStateType = {
  friends: userType[];
};

const initialState: initialStateType = { friends: [{ name: '' }] };

const slice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userType[]>) => {
      state.friends = action.payload;
    },

    fetchUsers: (state) => {
      state.friends;
    }
  }
});

export const { setUser, fetchUsers } = slice.actions;
export const friendsReducer = slice.reducer;
