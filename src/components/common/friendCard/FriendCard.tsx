import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { userType } from 'src/store/Friends';

import { classesType } from './types';

type FriendCardPropsTypes = {
  classes: classesType;
  user: userType | null;
  path: string;
};

const FriendCard: FC<FriendCardPropsTypes> = ({
  classes: { linkClasses, headingClasses },
  user,
  path
}): ReactElement => (
  <div>
    <Link to={`/${path}`} className={linkClasses} state={user}>
      <h4 className={headingClasses}>{user?.name}</h4>
    </Link>
  </div>
);

export default FriendCard;
FriendCard.displayName = 'FriendCard';
