import { ChangeEvent, FC, FormEvent, ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import { Loader, FormRow } from 'src/components/common';

import { dataForFormRowsType } from './types';

import './LoginPage.scss';

type LoginPagePropsType = {
  errorMessage: string | null;
  dataForFormRows: dataForFormRowsType[];
  isVisibleError: boolean;
  isLoading: boolean;
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  loginHandler: (event: FormEvent<HTMLFormElement>) => void;
};

const LoginPage: FC<LoginPagePropsType> = ({
  errorMessage,
  isVisibleError,
  dataForFormRows,
  isLoading,
  inputHandler,
  loginHandler
}): ReactElement => (
  <>
    <Helmet>
      <title>Login Page</title>
    </Helmet>
    <main className='login-page'>
      <div className='login-page__login'>
        <form onSubmit={loginHandler} className='login-page__form form'>
          {dataForFormRows.map((item) => (
            <FormRow
              key={item.inputName}
              classes={{
                divClasses: 'form__form-group',
                labelClasses: 'form__from-label',
                inputClasses: 'form__input'
              }}
              label={{ htmlForLabel: item.inputId, labelText: item.labelText }}
              input={{
                inputHandler: inputHandler,
                inputId: item.inputId,
                inputName: item.inputName,
                inputPlaceholder: item.inputPlaceHolder,
                inputType: item.inputType
              }}
            />
          ))}
          {isVisibleError && <p className='error-text'>{errorMessage}</p>}
          <button className='form__btn' disabled={isLoading}>
            {isLoading ? <Loader additionalClasses='small-loader' /> : 'Log In'}
          </button>
        </form>
      </div>
    </main>
  </>
);

export default LoginPage;
LoginPage.displayName = 'LoginPage';
