import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  isLoading: boolean;
};

const initialState: initialStateType = {
  isLoading: false
};

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsloading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { setIsloading } = slice.actions;
export const loadingReducer = slice.reducer;
