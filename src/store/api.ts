import axios from 'axios';

import { store } from 'src/store';

import { BASE_FETCH_URL } from 'src/constants';
import { setAlert } from './ErrorAlert';

import { userType } from './Friends';
import { newsType } from './News';

export const getFriends = async (): Promise<userType | undefined> => {
  try {
    const response = await axios.get<userType>(`${BASE_FETCH_URL}/users`);
    return response.data;
  } catch (error: Error | any) {
    store.dispatch(
      setAlert({ isVisibleAlert: true, alertMessage: error.message })
    );
  }
};

export const getCurrentUserData = async (
  userId: number
): Promise<userType | undefined> => {
  try {
    const response = await axios.get<userType[]>(
      `${BASE_FETCH_URL}/users?id=${userId}`
    );
    const [user] = response.data;
    return user;
  } catch (error: Error | any) {
    store.dispatch(
      setAlert({ isVisibleAlert: true, alertMessage: error.message })
    );
  }
};

export const getNews = async (): Promise<newsType | undefined> => {
  try {
    const response = await axios.get<newsType>(`${BASE_FETCH_URL}/posts`);
    return response.data;
  } catch (error: Error | any) {
    store.dispatch(
      setAlert({ isVisibleAlert: true, alertMessage: error.message })
    );
  }
};

export const getCurrentUserPosts = async (
  userId: number
): Promise<newsType | undefined> => {
  try {
    const response = await axios.get<newsType>(
      `${BASE_FETCH_URL}/posts?userId=${userId}`
    );
    return response.data;
  } catch (error: Error | any) {
    store.dispatch(
      setAlert({ isVisibleAlert: true, alertMessage: error.message })
    );
  }
};
