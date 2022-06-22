import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  isVisibleLinks: boolean;
};

const initialState: initialStateType = {
  isVisibleLinks: false
};

const slice = createSlice({
  name: 'visibleLinks',
  initialState,
  reducers: {
    setIsVisibleLinks: (state, action: PayloadAction<boolean>) => {
      state.isVisibleLinks = action.payload;
    }
  }
});

export const { setIsVisibleLinks } = slice.actions;
export const visibleLinksReducer = slice.reducer;
