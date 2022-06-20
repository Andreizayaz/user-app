import { FC, ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers, selectFriends } from 'src/store/Friends';

import FriendsPage from './FriendsPage';

const FriendsPageContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const friends = useSelector(selectFriends);
  console.log(friends);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <FriendsPage friends={friends} />;
};

export default FriendsPageContainer;
FriendsPageContainer.displayName = 'FriendsPageContainer';
