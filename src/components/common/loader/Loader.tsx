import { FC, ReactElement } from 'react';

import './Loader.scss';

type LoaderPropsType = {
  additionalClasses?: string;
};

const Loader: FC<LoaderPropsType> = ({ additionalClasses }): ReactElement => (
  <div className={`loader ${additionalClasses || ''}`}></div>
);

export default Loader;
Loader.displayName = 'Loader';
