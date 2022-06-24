import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectAuth } from 'src/store/Auth';
import { fetchUsers, selectFriends } from 'src/store/Friends';
import { selectIsLoading } from 'src/store/Loading';
import { selectErrorAlert, setAlert } from 'src/store/ErrorAlert';

import { LOGIN_LINK } from 'src/constants';

import FriendsPage from './FriendsPage';

const FriendsPageContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);
  const friends = useSelector(selectFriends);
  const isLoading = useSelector(selectIsLoading);
  const { isVisibleAlert } = useSelector(selectErrorAlert);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(LOGIN_LINK);
      return;
    }
    dispatch(fetchUsers());
    return () => {
      isVisibleAlert &&
        dispatch(setAlert({ isVisibleAlert: false, alertMessage: null }));
    };
  }, []);

  return <FriendsPage friends={friends} isLoading={isLoading} />;
};

export default FriendsPageContainer;
FriendsPageContainer.displayName = 'FriendsPageContainer';
