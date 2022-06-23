import { FC, ReactElement, ReactNode, useState } from 'react';

import { VisibleContext } from './visibleContext';

import './MainContainer.scss';

type MainPropsType = {
  children: ReactNode;
};

const MainContainer: FC<MainPropsType> = ({ children }): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleAsideStyle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <VisibleContext.Provider value={isVisible}>
      <div className='main-container'>
        <button
          className={
            isVisible
              ? 'main-container__burger btn-rotate'
              : 'main-container__burger'
          }
          onClick={toggleAsideStyle}
          data-name='toggle-btn'
        ></button>
        {children}
      </div>
    </VisibleContext.Provider>
  );
};

export default MainContainer;

MainContainer.displayName = 'MainContainer';
