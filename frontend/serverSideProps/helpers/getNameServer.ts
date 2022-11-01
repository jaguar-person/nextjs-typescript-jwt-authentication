import { GetServerSidePropsContext } from "next-redux-wrapper";
export default function getNameServer(ctx: GetServerSidePropsContext): string {
  console.log(process.env.PORT);
  return ctx.req ? `http://localhost:${process.env.PORT}` : "";
}
