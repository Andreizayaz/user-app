import { ChangeEvent } from 'react';

export type classesType = {
  divClasses: string;
  labelClasses: string;
  inputClasses: string;
};

export type labelTypes = {
  htmlForLabel: string;
  labelText: string;
};

export type inputTypes = {
  inputId: string;
  inputType: string;
  inputPlaceholder: string;
  inputName: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};
