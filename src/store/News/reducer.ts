import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { newsType } from './types';

type initialStateType = {
  news: newsType[];
};

const initialState: initialStateType = {
  news: [{ userId: 0, id: 0, title: '', body: '' }]
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
