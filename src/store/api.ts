import axios from 'axios';

import { BASE_FETCH_URL } from 'src/constants';

import { userType } from './Friends';

export const getFriends = async (): Promise<userType | undefined> => {
  try {
    const response = await axios.get<userType>(`${BASE_FETCH_URL}/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
