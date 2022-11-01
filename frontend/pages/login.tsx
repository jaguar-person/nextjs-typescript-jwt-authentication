import Head from "next/head";
import { Loader, Navbar, Alert, LoginForm, Protect } from "../src/components";
import { wrapper } from "../src/store";
import { initializeUser } from "../serverSideProps";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Log In</title>
      </Head>
      <Navbar />
      <Loader />
      <Alert />
      <Protect type={"public"}>
        <LoginForm />
      </Protect>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await initializeUser(ctx);
  return null;
});

export default LoginPage;
