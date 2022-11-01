import axios from "axios";
import Router from "next/router";
import { setCookie, removeCookie } from "../../utils/cookie";
import actions from ".";

import { AUTHENTICATE, DEAUTHENTICATE } from "../types/authentication.types";
import { FormValuesType } from "../../../interfaces";
import { User } from "../../../interfaces";

// gets token from the api and stores it in the redux store and in a cookie
const authenticate = (
  formData: FormValuesType,
  type: "login" | "register"
): any => {
  if (type !== "login" && type !== "register") {
    throw new Error("Wront API call!");
  }
  return async (dispatch: any) => {
    dispatch(actions.showLoader());
    try {
      const {
        data: { token },
      } = await axios.post(`/api/authentication/${type}`, formData);
      const {
        data: { user },
      } = await axios.get("/api/user", {
        headers: {
          authorization: token,
        },
      });
      setCookie("token", token);
      dispatch({ type: AUTHENTICATE, payload: { token, user } });
      dispatch(actions.hideAlert());
      await Router.push("/profile");
      dispatch(actions.hideLoader());
    } catch (e) {
      const {
        response: {
          data: { message },
        },
      } = e;
      const textMessage = message ? message : "Error, try again";
      dispatch(actions.showAlert(textMessage, "error"));
      dispatch(actions.hideLoader());
    }
  };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token: string, user: User): any => {
  return async (dispatch: any) => {
    dispatch(actions.showLoader());
    dispatch({ type: AUTHENTICATE, payload: { token, user } });
    dispatch(actions.hideLoader());
  };
};

// removing the token
const deauthenticate = () => {
  return async (dispatch: any) => {
    removeCookie("token");
    dispatch(actions.showLoader());
    const { pathname } = Router;
    if (pathname !== "/") {
      await Router.push("/");
    }
    dispatch({ type: DEAUTHENTICATE });
    dispatch(actions.hideLoader());
  };
};

const updateUserData = (token: string | null, body: any) => {
  return async (dispatch: any) => {
    if (token) {
      const {
        data: { user },
      } = await axios.put("/api/user", body, {
        headers: {
          authorization: token,
        },
      });
      if (user) {
        dispatch({ type: AUTHENTICATE, payload: { user, token } });
      }
    }
  };
};

export default {
  authenticate,
  reauthenticate,
  deauthenticate,
  updateUserData,
};
