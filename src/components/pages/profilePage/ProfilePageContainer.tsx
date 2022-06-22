import { FC, ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_LINK } from 'src/constants';
import { selectAuth } from 'src/store/Auth';
import { selectCurrentUser } from 'src/store/CurrentUser';
import { userType } from 'src/store/Friends';
import { selectNews } from 'src/store/News';

import ProfilePage from './ProfilePage';

const ProfilePageContainer: FC = (): ReactElement => {
  const location = useLocation();
  const userData = location.state as userType;
  const posts = useSelector(selectNews);
  const isAuth = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(LOGIN_LINK);
    }
  }, []);

  const currentUser = userData || useSelector(selectCurrentUser);

  const currentUserPosts = userData
    ? posts.filter((item) => item.userId === userData.id)
    : useSelector(selectCurrentUser).userPosts;

  userData;

  return <ProfilePage userData={currentUser} posts={currentUserPosts} />;
};

export default ProfilePageContainer;
ProfilePageContainer.displayName = 'ProfilePageContainer';
