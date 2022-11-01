import Head from "next/head";
import {
  Description,
  Loader,
  Navbar,
  Protect,
  ToolsChips,
} from "../src/components";
import { Container } from "@material-ui/core";
import { wrapper } from "../src/store";
import { initializeUser } from "../serverSideProps";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Nextjs login example</title>
      </Head>
      <Navbar />
      <Loader />
      <Protect type={"both"}>
        <Container maxWidth={"md"}>
          <Description />
          <ToolsChips />
        </Container>
      </Protect>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await initializeUser(ctx);
});

export default IndexPage;
