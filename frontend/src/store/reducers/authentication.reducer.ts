import {
  AuthActionTypes,
  AuthState,
  AUTHENTICATE,
  DEAUTHENTICATE,
} from "../types/authentication.types";
import { HYDRATE } from "next-redux-wrapper";

const initialState: AuthState = {
  token: null,
  user: null,
  auth: false,
};

export default function authReducer(
  state = initialState,
  action: AuthActionTypes
) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.authentication };
    case AUTHENTICATE:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        auth: true,
      };
    case DEAUTHENTICATE:
      return {
        ...state,
        token: null,
        user: null,
        auth: false,
      };
    default:
      return state;
  }
}
