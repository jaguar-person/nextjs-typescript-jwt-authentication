import Head from "next/head";
import {
  Alert,
  Navbar,
  Loader,
  RegisterForm,
  Protect,
} from "../src/components";
import { wrapper } from "../src/store";
import { initializeUser } from "../serverSideProps";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <Navbar />
      <Loader />
      <Alert />
      <Protect type={"public"}>
        <RegisterForm />
      </Protect>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (ctx) => {
  await initializeUser(ctx);
});

export default RegisterPage;
