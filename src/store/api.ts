import axios from 'axios';

import { BASE_FETCH_URL } from 'src/constants';

import { userType } from './Friends';
import { newsType } from './News';

export const getFriends = async (): Promise<userType | undefined> => {
  try {
    const response = await axios.get<userType>(`${BASE_FETCH_URL}/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getNews = async (): Promise<newsType | undefined> => {
  try {
    const response = await axios.get<newsType>(`${BASE_FETCH_URL}/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
