import { ChangeEvent, FC, FormEvent, ReactElement } from 'react';
import { Helmet } from 'react-helmet';

import './LoginPage.scss';

type LoginPagePropsType = {
  errorMessage: string | null;
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  loginHandler: (event: FormEvent<HTMLFormElement>) => void;
};

const LoginPage: FC<LoginPagePropsType> = ({
  errorMessage,
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
          <input
            className='form__input'
            type='text'
            placeholder='Enter Login'
            name='username'
            onChange={(e) => inputHandler(e)}
          />
          <input
            className='form__input'
            type='password'
            placeholder='Enter Password'
            name='userpassword'
            onChange={(e) => inputHandler(e)}
          />
          {errorMessage && <p>{errorMessage}</p>}
          <button className='form__btn'>Log In</button>
        </form>
      </div>
    </main>
  </>
);

export default LoginPage;
LoginPage.displayName = 'LoginPage';
