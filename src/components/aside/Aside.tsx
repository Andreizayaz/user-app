import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from 'src/store/Auth';
import { links } from 'src/data';
import { LOGIN, PROFILE, FRIENDS } from 'src/constants';

import { Navbar } from '../common';

import { ClassesType } from './types';

import './Aside.scss';

const Aside: FC = (): ReactElement => {
  const isAuth = useSelector(selectAuth);

  const classes: ClassesType = {
    listClasses: 'links-list',
    listItemClases: 'links-list__link-item',
    linkClasses: 'link-item__link'
  };

  const availableLinks = isAuth
    ? links
    : links.filter(
        (item) => item.linkName !== PROFILE && item.linkName !== FRIENDS
      );

  return (
    <aside className='aside'>
      <Navbar
        classes={classes}
        links={availableLinks.filter((item) => item.linkName !== LOGIN)}
      />
    </aside>
  );
};

export default Aside;
Aside.displayName = 'Aside';
