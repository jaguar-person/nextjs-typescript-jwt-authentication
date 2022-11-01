import {
  FormValidateFunctionType,
  FormValuesType,
  ChangeEventType,
  FormEventType,
  FormErrorsType,
  FormTouchedType,
  FocusEventType,
} from "../../interfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";
import actions from "../store/actions";

type SubmitFunctionType = (values: FormValuesType) => void | Promise<void>;

export default function useFormValidation(
  initialState: FormValuesType,
  validate: FormValidateFunctionType
) {
  const dispatch = useDispatch();
  const [values, setValues] = useState<FormValuesType>(initialState);
  const [touched, setTouched] = useState<FormTouchedType>({});
  const [errors, setErrors] = useState<FormErrorsType>({});

  const handleSubmit = (submitFunction: SubmitFunctionType) => async (
    e: FormEventType
  ) => {
    e.preventDefault();
    dispatch(actions.showLoader());
    const validationErrors = validate(values);
    const noErrors = Object.keys(validationErrors).length === 0;
    if (noErrors) {
      await submitFunction(values);
    } else {
      setErrors(validationErrors);
      let forceTouched = {};
      Object.keys(values).map((value) => {
        forceTouched = { ...forceTouched, [value]: true };
      });
      setTouched(forceTouched);
    }
    dispatch(actions.hideLoader());
  };

  function handleBlur(event: FocusEventType) {
    const validationErrors = validate(values);
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
    setErrors(validationErrors);
  }

  function handleChange(event: ChangeEventType) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  return { values, touched, errors, handleChange, handleBlur, handleSubmit };
}
