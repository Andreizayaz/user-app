import { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectErrorAlert, setAlert } from 'src/store/ErrorAlert';

import ErrorAlert from './ErrorAlert';

const ErrorAlertContainer: FC = (): ReactElement => {
  const dispatch = useDispatch();
  const { alertMessage } = useSelector(selectErrorAlert);

  const closeAlert = () =>
    dispatch(setAlert({ isVisibleAlert: false, alertMessage: null }));

  return (
    <ErrorAlert clickHandler={closeAlert} errorText={alertMessage as string} />
  );
};

export default ErrorAlertContainer;
ErrorAlertContainer.displayName = 'ErrorAlertContainer';
