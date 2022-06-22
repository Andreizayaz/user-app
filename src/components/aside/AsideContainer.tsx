import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from 'src/store/Auth';
import { selectIsVisibleLinks } from 'src/store/VisibleLinks';

import Aside from './Aside';
import { getAvailableLinks } from './helpers';
import { ClassesType } from './types';

const AsideContainer: FC = (): ReactElement => {
  const isAuth = useSelector(selectAuth);
  const isVisibleLinks = useSelector(selectIsVisibleLinks);

  const classes: ClassesType = {
    listClasses: 'links-list',
    listItemClases: 'links-list__link-item',
    linkClasses: 'link-item__link'
  };

  const availableLinks = getAvailableLinks(isAuth, isVisibleLinks);

  return <Aside classes={classes} availableLinks={availableLinks} />;
};

export default AsideContainer;
AsideContainer.displayName = 'AsideContainer';
