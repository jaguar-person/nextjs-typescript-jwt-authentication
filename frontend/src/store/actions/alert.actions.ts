import { SHOW_ALERT, HIDE_ALERT, REMOVE_MESSAGE } from "../types/alert.types";
import { Dispatch } from "redux";

export const showAlert = (message: string, severity: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: { message, severity } });
  };
};

export const hideAlert = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: HIDE_ALERT });
    const removeMessageTimeout = setTimeout(() => {
      dispatch({ type: REMOVE_MESSAGE });
    }, 500);
    clearTimeout(removeMessageTimeout);
  };
};

export const removeMessage = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: REMOVE_MESSAGE });
  };
};

export default {
  showAlert,
  hideAlert,
  removeMessage,
};
