import { FC, ReactElement } from 'react';

import './ErrorAlert.scss';

type ErrorAlertPropsTypes = {
  errorText: string | null;
  clickHandler: () => void;
};

const ErrorAlert: FC<ErrorAlertPropsTypes> = ({
  errorText,
  clickHandler
}): ReactElement => (
  <div className='error-message'>
    <div className='error-message__content'>
      <p className='content__text'>{errorText}</p>
      <button className='content__close-btn' onClick={clickHandler}></button>
    </div>
  </div>
);

export default ErrorAlert;
ErrorAlert.displayName = 'ErrorAlert';
