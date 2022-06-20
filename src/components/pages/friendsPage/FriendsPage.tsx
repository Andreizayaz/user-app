import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './FriendsPage.scss';
import { userType } from 'src/store/Friends';

type FriendsPagePropsType = {
  friends: userType[];
};

const FriendsPage: FC<FriendsPagePropsType> = ({ friends }): ReactElement => (
  <>
    <Helmet>
      <title>Friends Page</title>
    </Helmet>
    <main className='friends'>
      <div className='friends__container'>
        <h3 className='friends__heading'>Friends:</h3>
        <ul className='friends__friends-list'>
          {friends.map((item) => (
            <li key={item.name} className='friends-list__item list-item'>
              <Link to='/profile' className='list-item__link'>
                <h4 className='list-item__title'>{item.name}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  </>
);

export default FriendsPage;
FriendsPage.displayName = 'FriendsPage';
