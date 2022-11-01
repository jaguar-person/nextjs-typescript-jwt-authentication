import { SHOW_LOADER, HIDE_LOADER } from "../types/loader.types";

export const showLoader = () => {
  return (dispatch: any) => {
    dispatch({ type: SHOW_LOADER });
  };
};

export const hideLoader = () => {
  return (dispatch: any) => {
    dispatch({ type: HIDE_LOADER });
  };
};

export default {
  showLoader,
  hideLoader,
};
