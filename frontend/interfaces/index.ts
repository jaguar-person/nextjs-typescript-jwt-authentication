// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { FormEvent, ChangeEvent, FocusEvent } from "react";

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

// Forms types
export type RegisterFormValuesType = {
  username: string;
  email: string;
  password: string;
};
export type RegisterFormTouchedType = {
  username?: boolean;
  email?: boolean;
  password?: boolean;
};
export type RegisterFormErrorsType = {
  username?: string;
  email?: string;
  password?: string;
};
export type FormValuesType = {
  username?: string;
  email?: string;
  password?: string;
};
export type FormTouchedType = RegisterFormTouchedType;
export type FormErrorsType = RegisterFormErrorsType;
export type FormValidateFunctionType = (
  values: FormValuesType
) => RegisterFormErrorsType;

// Event types
export type ChangeEventType = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type FormEventType = FormEvent<HTMLFormElement>;
export type FocusEventType = FocusEvent<HTMLTextAreaElement | HTMLInputElement>;
