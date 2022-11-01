import actions from "../src/store/actions";
import getToken from "./helpers/getToken";
import axios from "axios";
import getNameServer from "./helpers/getNameServer";
import { GetServerSidePropsContext } from "next-redux-wrapper";
import { AnyAction, Store } from "redux";
import { RootState } from "../src/store/types/global.types";

// if the page is being loaded in the server, get auth token from the cookie, and update redux state:
export default async function configUser(
  ctx: GetServerSidePropsContext & { store: Store<RootState, AnyAction> }
): Promise<any> {
  const token = getToken(ctx);
  if (token) {
    const server = getNameServer(ctx);
    const { data } = await axios.get(`${server}/api/user`, {
      headers: {
        authorization: token,
      },
    });
    if (data.user) {
      ctx.store.dispatch(actions.reauthenticate(token, data.user));
    }
  }
}
