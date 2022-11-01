import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { wrapper } from "../src/store";
import theme from "../src/utils/theme";
import NProgress from "nprogress";
import Router from "next/router";
import { AppProps, AppContext, AppInitialProps } from "next/app";
import { useEffect, FC } from "react";
import { HIDE_ALERT } from "../src/store/types/alert.types";
import { HIDE_LOADER } from "../src/store/types/loader.types";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp: FC<AppProps> = (props: AppProps) => {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export async function getServerSideProps({
  Component,
  ctx,
}: AppContext): Promise<AppInitialProps> {
  ctx.store.dispatch({ type: HIDE_ALERT });
  ctx.store.dispatch({ type: HIDE_LOADER });
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
}

export default wrapper.withRedux(MyApp);
