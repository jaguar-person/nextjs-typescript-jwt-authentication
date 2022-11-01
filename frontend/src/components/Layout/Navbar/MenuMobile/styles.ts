import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
}));
