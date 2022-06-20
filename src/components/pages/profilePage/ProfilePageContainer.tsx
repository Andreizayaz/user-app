import { FC, ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectCurrentUser } from 'src/store/CurrentUser';
import { userType } from 'src/store/Friends';
import { selectNews } from 'src/store/News';

import ProfilePage from './ProfilePage';

const ProfilePageContainer: FC = (): ReactElement => {
  const location = useLocation();
  const userData = location.state as userType;
  const posts = useSelector(selectNews);

  const currentUser = userData || useSelector(selectCurrentUser);

  const currentUserPosts = userData
    ? posts.filter((item) => item.userId === userData.id)
    : useSelector(selectCurrentUser).userPosts;

  console.log(userData);

  return <ProfilePage userData={currentUser} posts={currentUserPosts} />;
};

export default ProfilePageContainer;
ProfilePageContainer.displayName = 'ProfilePageContainer';
