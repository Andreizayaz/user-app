import { FC, ReactElement } from 'react';

import { Navbar } from '../common';

import { links } from '../../data';

import { LOGIN } from 'src/constants';

import { ClassesType } from './types';

import './Aside.scss';

const Aside: FC = (): ReactElement => {
  const classes: ClassesType = {
    listClasses: 'links-list',
    listItemClases: 'links-list__link-item',
    linkClasses: 'link-item__link'
  };

  return (
    <aside className='aside'>
      <Navbar
        classes={classes}
        links={links.filter((item) => item.linkName !== LOGIN)}
      />
    </aside>
  );
};

export default Aside;
Aside.displayName = 'Aside';
