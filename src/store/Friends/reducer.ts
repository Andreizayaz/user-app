import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { userType } from './types';

type initialStateType = {
  friends: userType[];
};

const initialState: initialStateType = {
  friends: [
    {
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
      }
    }
  ]
};

const slice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends: (state, action: PayloadAction<userType[]>) => {
      state.friends = action.payload;
    },

    fetchUsers: (state) => {
      state.friends;
    }
  }
});

export const { setFriends, fetchUsers } = slice.actions;
export const friendsReducer = slice.reducer;
