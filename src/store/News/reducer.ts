import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { newsType } from './types';

type initialStateType = {
  news: newsType[] | null;
};

const initialState: initialStateType = {
  news: null
};

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<newsType[]>) => {
      state.news = action.payload;
    },

    fetchNews: (state) => {
      state.news;
    }
  }
});

export const { setNews, fetchNews } = slice.actions;

export const newsReducer = slice.reducer;
