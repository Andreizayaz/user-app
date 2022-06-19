import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../common';

import { links } from '../../data';

import { LOGIN } from 'src/constants';

import { ClassesType } from './types';

import './Header.scss';

const Header: FC = (): ReactElement => {
  const classes: ClassesType = {
    listClasses: 'links-list',
    listItemClases: 'links-list__link-item',
    linkClasses: 'link-item__link'
  };

  return (
    <header className='header'>
      <div className='header__container container'>
        <Link to='/' className='header__logo'></Link>
        <Navbar
          classes={classes}
          links={links.filter((item) => item.linkName === LOGIN)}
        />
      </div>
    </header>
  );
};

export default Header;
Header.displayName = 'Header';
