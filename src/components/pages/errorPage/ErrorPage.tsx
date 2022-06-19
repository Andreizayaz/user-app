import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './ErrorPage.scss';

const ErrorPage: FC = (): ReactElement => (
  <>
    <Helmet>
      <title>Error Page</title>
    </Helmet>
    <main className='error'>
      <div className='error__container'>
        <div className='error_image'></div>
        <h3 className='error__heading'>Error occurred</h3>
        <p className='error__text text'>
          <span className='text__top'>Error 404: Page not found!</span>
          <span className='text__bottom'>Try to send correct request</span>
        </p>
      </div>
    </main>
  </>
);

export default ErrorPage;
ErrorPage.displayName = 'ErrorPage';
