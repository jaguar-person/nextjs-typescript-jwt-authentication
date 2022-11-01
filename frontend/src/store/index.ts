import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, Middleware } from "redux";
import rootReducer from "./reducers";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { RootState } from "./types/global.types";

const isOnProduction = process.env.NODE_ENV === "production";

declare module "react-redux" {
  interface DefaultRootState extends RootState {}
}

const bindMiddleware = (middleware: Array<Middleware>) => {
  if (!isOnProduction) {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<RootState> = () =>
  createStore(rootReducer, bindMiddleware([thunk]));

export const wrapper = createWrapper<RootState>(makeStore, {
  debug: !isOnProduction,
});
