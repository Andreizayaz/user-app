import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './LoginPage.scss';

const LoginPage: FC = (): ReactElement => (
  <>
    <Helmet>
      <title>Login Page</title>
    </Helmet>
    <main className='login-page'>
      <div className='login-page__login'>
        <form className='login-page__form form'>
          <input
            className='form__input'
            type='text'
            placeholder='Enter Login'
          />
          <input
            className='form__input'
            type='password'
            placeholder='Enter Password'
          />
          <button className='form__btn'>Log In</button>
        </form>
      </div>
    </main>
  </>
);

export default LoginPage;
LoginPage.displayName = 'LoginPage';
