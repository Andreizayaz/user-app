import {
  USER_NAME_FIELD,
  USER_EMAIL_FIELD,
  USER_PASSWORD_FIELD,
  LOGIN_LABEL_TEXT,
  LOGIN_INPUT_ID,
  LOGIN_INPUT_PLACEHOLDER,
  EMAIL_LABEL_TEXT,
  EMAIL_INPUT_ID,
  EMAIL_INPUT_PLACEHOLDER,
  PASSWORD_LABEL_TEXT,
  PASSWORD_INPUT_ID,
  PASSWORD_INPUT_PLACEHOLDER
} from 'src/constants';

export const dataForFormRows = [
  {
    labelText: LOGIN_LABEL_TEXT,
    inputId: LOGIN_INPUT_ID,
    inputType: 'text',
    inputPlaceHolder: LOGIN_INPUT_PLACEHOLDER,
    inputName: USER_NAME_FIELD
  },
  {
    labelText: EMAIL_LABEL_TEXT,
    inputId: EMAIL_INPUT_ID,
    inputType: 'email',
    inputPlaceHolder: EMAIL_INPUT_PLACEHOLDER,
    inputName: USER_EMAIL_FIELD
  },
  {
    labelText: PASSWORD_LABEL_TEXT,
    inputId: PASSWORD_INPUT_ID,
    inputType: 'password',
    inputPlaceHolder: PASSWORD_INPUT_PLACEHOLDER,
    inputName: USER_PASSWORD_FIELD
  }
];
