import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { headerNav, links } from 'src/data';

import { selectAuth, setAuth } from 'src/store/Auth';

import Header from './Header';

import { ClassesType } from './types';
import { getLinks } from 'src/helpers';
import { setIsVisibleLinks } from 'src/store/VisibleLinks';

const HeaderContainer: FC = (): ReactElement => {
  const isAuth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(setAuth(false));
    dispatch(setIsVisibleLinks(false));
    navigate('/');
  };
  const classes: ClassesType = {
    listClasses: 'links-list',
    listItemClases: 'links-list__link-item',
    linkClasses: 'link-item__link'
  };

  const headerLinks = getLinks(links, headerNav);

  return (
    <Header
      classes={classes}
      links={headerLinks}
      isAuth={isAuth}
      logoutUser={logoutUser}
    />
  );
};

export default HeaderContainer;
HeaderContainer.displayName = 'HeaderPropsTypes';
