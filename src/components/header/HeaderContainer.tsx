import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { links } from 'src/data';
import { LOGIN } from 'src/constants';

import { selectAuth, setAuth } from 'src/store/Auth';

import Header from './Header';

import { ClassesType } from './types';

const HeaderContainer: FC = (): ReactElement => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(setAuth(false));
    navigate('/');
  };
  const classes: ClassesType = {
    listClasses: 'links-list',
    listItemClases: 'links-list__link-item',
    linkClasses: 'link-item__link'
  };

  return (
    <Header
      classes={classes}
      links={links}
      login={LOGIN}
      isAuth={isAuth}
      logoutUser={logoutUser}
    />
  );
};

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderPropsTypes';
