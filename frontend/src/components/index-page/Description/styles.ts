import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(2),
  },
  textDescription: {
    wordBreak: "break-word",
  },
  nextLogo: {
    width: 216,
  },
}));
