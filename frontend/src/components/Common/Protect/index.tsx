// Components
import { Backdrop, CircularProgress } from "@material-ui/core";
// Hooks
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useStyles from "./style";

type Props = {
  type: "both" | "public" | "private";
  children: JSX.Element;
};

export default function Protect({ type, children }: Props) {
  const { auth } = useSelector((state) => state.authentication);
  const router = useRouter();
  const classes = useStyles();
  if (type === "both") {
    return children;
  } else if (!auth && type === "public") {
    return children;
  } else if (auth && type === "private") {
    return children;
  }
  const route =
    type === "private" && !auth
      ? "/login"
      : type === "public" && auth
      ? "/profile"
      : null;
  if (route) {
    router.push(route);
  }
  return (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
