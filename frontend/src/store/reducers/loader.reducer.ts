import {
  HIDE_LOADER,
  LoaderActionTypes,
  LoaderState,
  SHOW_LOADER,
} from "../types/loader.types";
import { HYDRATE } from "next-redux-wrapper";

const initialState: LoaderState = {
  show: false,
};

export default function authReducer(
  state = initialState,
  action: LoaderActionTypes
) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.loader };
    case SHOW_LOADER:
      return {
        ...state,
        show: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}
