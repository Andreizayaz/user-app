import { FC, ReactElement, ReactNode } from 'react';

import './MainContainer.scss';

type MainPropsType = {
  children: ReactNode;
};

const MainContainer: FC<MainPropsType> = ({ children }): ReactElement => (
  <div className='main-container'>
    <button className='main-container__burger'></button>
    {children}
  </div>
);

export default MainContainer;

MainContainer.displayName = 'MainContainer';
