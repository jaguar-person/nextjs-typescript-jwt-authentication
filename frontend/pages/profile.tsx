import Head from "next/head";
import { Loader, Navbar, Protect, WhoAmI } from "../src/components";
import { wrapper } from "../src/store";
import { initializeUser } from "../serverSideProps";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Navbar />
      <Loader />
      <Protect type={"private"}>
        <WhoAmI />
      </Protect>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await initializeUser(ctx);
});

export default RegisterPage;
