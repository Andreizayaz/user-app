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

import { selectErrorMessage, setAuth, setErrorMessage } from 'src/store/Auth';
import { userType } from 'src/store/Friends';
import { fetchCurrentUser, selectCurrentUser } from 'src/store/CurrentUser';
import { setIsVisibleLinks } from 'src/store/VisibleLinks';

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
  const currentUser: userType = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isVisibleError, setIsVisibleError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(setIsVisibleLinks(true));
  }, []);

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
      navigate(PROFILE_LINK, { state: currentUser });
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
