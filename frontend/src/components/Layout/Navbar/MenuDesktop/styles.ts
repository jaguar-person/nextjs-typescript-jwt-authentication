import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sectionDesktop: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      display: "none",
      width: "100%",
      justifyContent: "center",
    },
  },
  createAccountButton: {
    minWidth: 148,
    margin: theme.spacing(0, 2),
  },
}));
