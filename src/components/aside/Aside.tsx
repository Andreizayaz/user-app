import { FC, ReactElement } from 'react';
import { LinkType } from 'src/types';

import { Navbar } from '../common';

import { ClassesType } from './types';

import './Aside.scss';

type AsidePropsType = {
  classes: ClassesType;
  availableLinks: LinkType[] | undefined;
  isVisible: boolean;
};

const Aside: FC<AsidePropsType> = ({
  classes,
  availableLinks,
  isVisible
}): ReactElement => {
  return (
    <aside
      className={isVisible ? 'aside aside-visible' : 'aside'}
      data-name='aside'
    >
      <Navbar classes={classes} links={availableLinks} />
    </aside>
  );
};

export default Aside;
Aside.displayName = 'Aside';
