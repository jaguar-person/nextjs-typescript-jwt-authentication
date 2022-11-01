import { HydrateAction } from "./global.types";

export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export interface AlertState {
  show: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

interface ShowAlertAction {
  type: typeof SHOW_ALERT;
  payload: { message: string; severity: string };
}

interface HideAlertAction {
  type: typeof HIDE_ALERT;
}

interface UpdateMessageAction {
  type: typeof REMOVE_MESSAGE;
}

export type AlertActionTypes =
  | HydrateAction
  | ShowAlertAction
  | HideAlertAction
  | UpdateMessageAction;
