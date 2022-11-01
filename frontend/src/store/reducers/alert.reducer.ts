import {
  AlertActionTypes,
  AlertState,
  HIDE_ALERT,
  SHOW_ALERT,
  REMOVE_MESSAGE,
} from "../types/alert.types";
import { HYDRATE } from "next-redux-wrapper";

const initialState: AlertState = {
  show: false,
  message: "",
  severity: "error",
};

export default function authReducer(
  state = initialState,
  action: AlertActionTypes
) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.alert };
    case SHOW_ALERT:
      return {
        ...state,
        show: true,
        message: action.payload.message,
        severity: action.payload.severity,
      };
    case HIDE_ALERT:
      return {
        ...state,
        show: false,
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
}
