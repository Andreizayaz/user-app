import { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorMessage, setAuth, setErrorMessage } from 'src/store/Auth';

import { USER_NAME, USER_PASSWORD } from 'src/constants';

import LoginPage from './LoginPage';

const LoginPageContainer: FC = (): ReactElement => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'username':
        setUserName(value);
        break;
      case 'userpassword':
        setUserPassword(value);
        break;
    }
  };

  const loginUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === USER_NAME && userPassword === USER_PASSWORD) {
      dispatch(setAuth(true));
      dispatch(setErrorMessage(null));
      return;
    }

    dispatch(setErrorMessage('invalid username or password'));
  };

  return (
    <LoginPage
      errorMessage={errorMessage}
      loginHandler={loginUser}
      inputHandler={inputHandler}
    />
  );
};

export default LoginPageContainer;
LoginPageContainer.displayName = 'LoginPageContainer';
