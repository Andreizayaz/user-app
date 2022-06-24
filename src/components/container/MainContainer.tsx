import { FC, ReactElement, ReactNode, useState } from 'react';

import { ErrorAlert } from '../errorAlert';

import { VisibleContext } from './visibleContext';

import './MainContainer.scss';
import { useSelector } from 'react-redux';
import { selectErrorAlert } from 'src/store/ErrorAlert';

type MainPropsType = {
  children: ReactNode;
};

const MainContainer: FC<MainPropsType> = ({ children }): ReactElement => {
  const { isVisibleAlert } = useSelector(selectErrorAlert);
  const [isVisible, setIsVisible] = useState(false);
  const toggleAsideStyle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <VisibleContext.Provider value={isVisible}>
      <div className='main-container'>
        {isVisible && (
          <div className='overlay' onClick={toggleAsideStyle}></div>
        )}
        <button
          className={
            isVisible
              ? 'main-container__burger btn-rotate'
              : 'main-container__burger'
          }
          onClick={toggleAsideStyle}
          data-name='toggle-btn'
        ></button>
        {isVisibleAlert && <ErrorAlert />}
        {children}
      </div>
    </VisibleContext.Provider>
  );
};

export default MainContainer;

MainContainer.displayName = 'MainContainer';
