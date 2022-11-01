import { HydrateAction } from "./global.types";

export const SHOW_LOADER = "ACTIVE_LOADER";
export const HIDE_LOADER = "DEACTIVATE_LOADER";

export interface LoaderState {
  show: boolean;
}

interface ShowLoaderAction {
  type: typeof SHOW_LOADER;
}

interface HideLoaderAction {
  type: typeof HIDE_LOADER;
}

export type LoaderActionTypes =
  | HydrateAction
  | ShowLoaderAction
  | HideLoaderAction;
