import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(2),
    minHeight: "100vh",
  },
  textDescription: {
    wordBreak: "break-word",
  },
}));
