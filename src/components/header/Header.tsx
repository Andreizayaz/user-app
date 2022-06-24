import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../common';

import { LinkType } from 'src/types';

import { ClassesType } from './types';

import './Header.scss';

type HeaderPropsTypes = {
  classes: ClassesType;
  links: LinkType[] | undefined;
  isAuth: boolean;
  logoutUser: () => void;
};

const Header: FC<HeaderPropsTypes> = ({
  classes,
  links,
  isAuth,
  logoutUser
}): ReactElement => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <Link to='/' className='header__logo'></Link>
        {isAuth ? (
          <button className={classes.linkClasses} onClick={logoutUser}>
            Log out
          </button>
        ) : (
          <Navbar classes={classes} links={links} />
        )}
      </div>
    </header>
  );
};

export default Header;
Header.displayName = 'Header';
