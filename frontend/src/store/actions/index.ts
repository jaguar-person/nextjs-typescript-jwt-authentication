import alertActions from "./alert.actions";
import authenticationActions from "./authentication.actions";
import loaderActions from "./loader.actions";

const actions = {
  ...alertActions,
  ...authenticationActions,
  ...loaderActions,
};

export default actions;
