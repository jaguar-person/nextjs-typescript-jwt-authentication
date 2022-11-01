import { HYDRATE } from "next-redux-wrapper";
import { AuthState } from "./authentication.types";
import { LoaderState } from "./loader.types";
import { AlertState } from "./alert.types";

export type HydrateAction = {
  type: typeof HYDRATE;
  payload: RootState;
};

export type RootState = {
  authentication: AuthState;
  loader: LoaderState;
  alert: AlertState;
};
