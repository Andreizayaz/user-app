import { FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { LinkType, ClassesType } from './types';

type NavbarPropsType = {
  links: LinkType[];
  classes: ClassesType;
};

const Navbar: FC<NavbarPropsType> = ({
  links,
  classes: { listClasses, listItemClases, linkClasses }
}): ReactElement => (
  <nav>
    <ul className={listClasses}>
      {links.map(({ linkName, link }) => (
        <li key={linkName} className={listItemClases}>
          <NavLink to={link} className={linkClasses}>
            {linkName}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;

Navbar.displayName = 'Navbar';
