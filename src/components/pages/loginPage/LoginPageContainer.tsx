import {
  ChangeEvent,
  FC,
  FormEvent,
  ReactElement,
  useEffect,
  useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectAuth,
  selectErrorMessage,
  setAuth,
  setErrorMessage,
  setUser
} from 'src/store/Auth';
import { userType } from 'src/store/Friends';
import { fetchCurrentUser, selectCurrentUser } from 'src/store/CurrentUser';
import { setIsVisibleLinks } from 'src/store/VisibleLinks';

import {
  PROFILE_LINK,
  USER_NAME,
  USER_PASSWORD,
  USER_NAME_FIELD,
  USER_PASSWORD_FIELD,
  USER_EMAIL_FIELD
} from 'src/constants';

import LoginPage from './LoginPage';
import { selectIsLoading, setIsloading } from 'src/store/Loading';

const LoginPageContainer: FC = (): ReactElement => {
  const errorMessage = useSelector(selectErrorMessage);
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectAuth);
  const currentUser: userType = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isVisibleError, setIsVisibleError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(PROFILE_LINK, { state: currentUser });
      return;
    }
    dispatch(setIsVisibleLinks(true));
  });

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    isVisibleError && setIsVisibleError(false);
    switch (name) {
      case USER_NAME_FIELD:
        setUserName(value);
        break;
      case USER_EMAIL_FIELD:
        setUserEmail(value);
        break;
      case USER_PASSWORD_FIELD:
        setUserPassword(value);
        break;
    }
  };

  const loginUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setIsloading(true));
    if (userName === USER_NAME && userPassword === USER_PASSWORD && userEmail) {
      dispatch(setAuth(true));
      dispatch(setUser({ userName, userEmail, userPassword }));
      dispatch(setErrorMessage(null));
      dispatch(fetchCurrentUser(1));
      dispatch(setIsloading(false));
      return;
    }

    dispatch(
      setErrorMessage('invalid username or password or email field is empty')
    );
    setIsVisibleError(true);
    dispatch(setIsloading(false));
  };

  return (
    <LoginPage
      errorMessage={errorMessage}
      isVisibleError={isVisibleError}
      userNameField={USER_NAME_FIELD}
      userEmailField={USER_EMAIL_FIELD}
      userPasswordField={USER_PASSWORD_FIELD}
      isLoading={isLoading}
      loginHandler={loginUser}
      inputHandler={inputHandler}
    />
  );
};

export default LoginPageContainer;
LoginPageContainer.displayName = 'LoginPageContainer';
