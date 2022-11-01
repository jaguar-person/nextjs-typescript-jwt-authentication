import { User } from "../../../interfaces";
import { HydrateAction } from "./global.types";

export const AUTHENTICATE = "AUTHENTICATE";
export const DEAUTHENTICATE = "DEAUTHENTICATE";

export interface AuthState {
  user: User | null;
  token: string | null;
  auth: boolean;
}

interface AuthenticateAction {
  type: typeof AUTHENTICATE;
  payload: { user: User; token: string };
}

interface DeauthenticateAction {
  type: typeof DEAUTHENTICATE;
}

export type AuthActionTypes =
  | HydrateAction
  | AuthenticateAction
  | DeauthenticateAction;
