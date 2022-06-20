import { ChangeEvent, FC, FormEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectErrorMessage, setAuth, setErrorMessage } from 'src/store/Auth';

import {
  PROFILE_LINK,
  USER_NAME,
  USER_PASSWORD,
  USER_NAME_FIELD,
  USER_PASSWORD_FIELD
} from 'src/constants';

import LoginPage from './LoginPage';

const LoginPageContainer: FC = (): ReactElement => {
  const errorMessage = useSelector(selectErrorMessage);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isVisibleError, setIsVisibleError] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    isVisibleError && setIsVisibleError(false);
    switch (name) {
      case USER_NAME_FIELD:
        setUserName(value);
        break;
      case USER_PASSWORD_FIELD:
        setUserPassword(value);
        break;
    }
  };

  const loginUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === USER_NAME && userPassword === USER_PASSWORD) {
      dispatch(setAuth(true));
      dispatch(setErrorMessage(null));
      navigate(PROFILE_LINK);
      return;
    }

    dispatch(setErrorMessage('invalid username or password'));
    setIsVisibleError(true);
  };

  return (
    <LoginPage
      errorMessage={errorMessage}
      isVisibleError={isVisibleError}
      nameField={USER_NAME_FIELD}
      passwordField={USER_PASSWORD_FIELD}
      loginHandler={loginUser}
      inputHandler={inputHandler}
    />
  );
};

export default LoginPageContainer;
LoginPageContainer.displayName = 'LoginPageContainer';
