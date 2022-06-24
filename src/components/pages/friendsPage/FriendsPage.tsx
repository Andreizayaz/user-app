import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './FriendsPage.scss';
import { userType } from 'src/store/Friends';
import { Loader, FriendCard } from 'src/components/common';

type FriendsPagePropsType = {
  friends: userType[] | null;
  isLoading: boolean;
};

const FriendsPage: FC<FriendsPagePropsType> = ({
  friends,
  isLoading
}): ReactElement => (
  <>
    <Helmet>
      <title>Friends Page</title>
    </Helmet>
    <main className='friends'>
      <div className='friends__container'>
        <h3 className='friends__heading'>Friends:</h3>
        {isLoading ? (
          <Loader />
        ) : (
          friends && (
            <ul className='friends__friends-list'>
              {friends?.map((item) => (
                <li key={item?.name} className='friends-list__item list-item'>
                  <FriendCard
                    classes={{
                      linkClasses: 'list-item__link',
                      headingClasses: 'list-item__title'
                    }}
                    path='profile'
                    user={item}
                  />
                </li>
              ))}
            </ul>
          )
        )}
      </div>
    </main>
  </>
);

export default FriendsPage;
FriendsPage.displayName = 'FriendsPage';
