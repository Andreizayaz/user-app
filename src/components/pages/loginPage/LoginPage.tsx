import { ChangeEvent, FC, FormEvent, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from 'src/components/common';

import './LoginPage.scss';

type LoginPagePropsType = {
  errorMessage: string | null;
  userNameField: string;
  userEmailField: string;
  userPasswordField: string;
  isVisibleError: boolean;
  isLoading: boolean;
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  loginHandler: (event: FormEvent<HTMLFormElement>) => void;
};

const LoginPage: FC<LoginPagePropsType> = ({
  errorMessage,
  isVisibleError,
  userNameField,
  userEmailField,
  userPasswordField,
  isLoading,
  inputHandler,
  loginHandler
}): ReactElement => (
  <>
    <Helmet>
      <title>Login Page</title>
    </Helmet>
    <main className='login-page'>
      <div className='login-page__login'>
        <form onSubmit={loginHandler} className='login-page__form form'>
          <div className='form__form-group'>
            <label className='form__from-label' htmlFor='login'>
              Login:
            </label>
            <input
              id='login'
              className='form__input'
              type='text'
              placeholder='Enter Login'
              name={userNameField}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className='form__form-group'>
            <label className='form__from-label' htmlFor='email'>
              Email:
            </label>
            <input
              id='email'
              className='form__input'
              type='email'
              placeholder='Enter Email'
              name={userEmailField}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          <div className='form__form-group'>
            <label className='form__from-label' htmlFor='password'>
              Password:
            </label>
            <input
              id='password'
              className='form__input'
              type='password'
              placeholder='Enter Password'
              name={userPasswordField}
              onChange={(e) => inputHandler(e)}
            />
          </div>
          {isVisibleError && <p className='error-text'>{errorMessage}</p>}
          <button className='form__btn' disabled={isLoading}>
            {isLoading ? <Loader additionalClasses='small-loader' /> : 'Log In'}
          </button>
        </form>
      </div>
    </main>
  </>
);

export default LoginPage;
LoginPage.displayName = 'LoginPage';
