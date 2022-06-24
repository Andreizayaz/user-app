import { FC, ReactElement } from 'react';

import { classesType, labelTypes, inputTypes } from './types';

export type FormRowPropsTypes = {
  classes: classesType;
  label: labelTypes;
  input: inputTypes;
};

const FormRow: FC<FormRowPropsTypes> = ({
  classes: { divClasses, labelClasses, inputClasses },
  label: { htmlForLabel, labelText },
  input: { inputId, inputName, inputType, inputPlaceholder, inputHandler }
}): ReactElement => (
  <div className={divClasses}>
    <label className={labelClasses} htmlFor={htmlForLabel}>
      {labelText}:
    </label>
    <input
      id={inputId}
      className={inputClasses}
      type={inputType}
      placeholder={inputPlaceholder}
      name={inputName}
      onChange={(e) => inputHandler(e)}
    />
  </div>
);

export default FormRow;
FormRow.displayName = 'FormRow';
