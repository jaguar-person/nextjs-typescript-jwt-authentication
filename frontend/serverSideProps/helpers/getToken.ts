import { getCookie } from "../../src/utils/cookie";
import { GetServerSidePropsContext } from "next-redux-wrapper";
import { Store } from "redux";

export default function getToken(
  ctx: GetServerSidePropsContext & {
    store: Store;
  }
): string | null {
  return ctx.req
    ? getCookie("token", ctx.req)
    : ctx.store.getState().authentication.token;
}
