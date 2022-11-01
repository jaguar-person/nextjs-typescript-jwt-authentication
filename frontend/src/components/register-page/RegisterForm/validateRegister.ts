import {
  RegisterFormValuesType,
  RegisterFormErrorsType,
  FormValuesType,
} from "../../../../interfaces";

export default function validateRegister(
  values: FormValuesType | RegisterFormValuesType
): RegisterFormErrorsType {
  const errors: RegisterFormErrorsType = {};
  // Username Errors
  if (!values.username) {
    errors.username = "Required Username";
  } else if (values.username.length < 4) {
    errors.username = "Username must be at least 4 characters";
  }
  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  // Password Errors
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }
  return errors;
}
