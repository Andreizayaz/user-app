import { FC, ReactElement } from 'react';
import { LinkType } from 'src/types';

import { Navbar } from '../common';

import { ClassesType } from './types';

import './Aside.scss';

type AsidePropsType = {
  classes: ClassesType;
  availableLinks: LinkType[] | undefined;
};

const Aside: FC<AsidePropsType> = ({
  classes,
  availableLinks
}): ReactElement => {
  return (
    <aside className='aside'>
      <Navbar classes={classes} links={availableLinks} />
    </aside>
  );
};

export default Aside;
Aside.displayName = 'Aside';
