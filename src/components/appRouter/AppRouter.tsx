import { FC, ReactElement } from 'react';

import { Routes, Route } from 'react-router-dom';

import {
  ErrorPage,
  FriendsPage,
  HomePage,
  LoginPage,
  NewsPage,
  ProfilePage
} from 'src/components';

import {
  HOME_LINK,
  LOGIN_LINK,
  PROFILE_LINK,
  FRIENDS_LINK,
  NEWS_LINK
} from 'src/constants';

const AppRouter: FC = (): ReactElement => (
  <Routes>
    <Route path={HOME_LINK} element={<HomePage />} />
    <Route path={LOGIN_LINK} element={<LoginPage />} />
    <Route path={PROFILE_LINK} element={<ProfilePage />} />
    <Route path={FRIENDS_LINK} element={<FriendsPage />} />
    <Route path={NEWS_LINK} element={<NewsPage />} />
    <Route path='*' element={<ErrorPage />} />
  </Routes>
);

export default AppRouter;
AppRouter.displayName = 'AppRouter';
