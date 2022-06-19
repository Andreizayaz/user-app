import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './HomePage.scss';

const HomePage: FC = (): ReactElement => (
  <>
    <Helmet>
      <title>Home Page</title>
    </Helmet>
    <main className='home-page'>
      <div className='home-page__content'>
        <div className='home-page__image'></div>
        <div className='home-page__text-content text-content'>
          <h2 className='text-content__heading'>Home Page</h2>
          <p className='text-content__text'>Visit our site</p>
        </div>
      </div>
    </main>
  </>
);

export default HomePage;
HomePage.displayName = 'HomePage';
