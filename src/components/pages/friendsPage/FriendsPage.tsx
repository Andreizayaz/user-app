import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './FriendsPage.scss';

const FriendsPage: FC = (): ReactElement => (
  <>
    <Helmet>
      <title>Friends Page</title>
    </Helmet>
    <main className='friends'>
      <div className='friends__container'>
        <h3 className='friends__heading'>Friends:</h3>
        <ul className='friends__friends-list'>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
          <li className='friends-list__item list-item'>
            <Link to='/profile' className='list-item__link'>
              <h4 className='list-item__title'>Leanne Graham Bret</h4>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  </>
);

export default FriendsPage;
FriendsPage.displayName = 'FriendsPage';
