import { FC, ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_LINK } from 'src/constants';
import { selectAuth } from 'src/store/Auth';
import { fetchCurrentUser, selectCurrentUser } from 'src/store/CurrentUser';
import { selectErrorAlert, setAlert } from 'src/store/ErrorAlert';
import { userType } from 'src/store/Friends';
import { selectIsLoading } from 'src/store/Loading';

import ProfilePage from './ProfilePage';

const ProfilePageContainer: FC = (): ReactElement => {
  const [isShowUserContacts, setIsShowUserContacts] = useState(false);
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const userData = location.state as userType;
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const { isVisibleAlert } = useSelector(selectErrorAlert);
  const navigate = useNavigate();

  const toggleShowUserContacts = () => {
    setIsShowUserContacts(!isShowUserContacts);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate(LOGIN_LINK);
      return;
    }
    userData
      ? dispatch(fetchCurrentUser(userData.id))
      : dispatch(fetchCurrentUser(1));
    return () => {
      isVisibleAlert &&
        dispatch(setAlert({ isVisibleAlert: false, alertMessage: null }));
    };
  }, []);
  const currentUserPosts = useSelector(selectCurrentUser)?.userPosts;

  return (
    <ProfilePage
      userData={currentUser}
      posts={currentUserPosts}
      isLoading={isLoading}
      handleClick={toggleShowUserContacts}
      isShowUserContacts={isShowUserContacts}
    />
  );
};

export default ProfilePageContainer;
ProfilePageContainer.displayName = 'ProfilePageContainer';
