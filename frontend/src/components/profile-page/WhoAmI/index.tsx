// Components
import { Paper, Typography } from "@material-ui/core";
// Hooks
import useStyles from "./styles";
import { useSelector } from "react-redux";

export default function WhoAmI() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.authentication);
  if (user) {
    return (
      <Paper component={"section"} className={classes.container}>
        <Typography
          variant={"h3"}
          component={"h1"}
          align={"center"}
          gutterBottom
        >
          {`Hello ${user.username}`}
        </Typography>
        <Typography
          variant={"h4"}
          component={"p"}
          align={"center"}
          gutterBottom
          className={classes.textDescription}
        >
          {`Your email is ${user.email}`}
        </Typography>
      </Paper>
    );
  }
  return null;
}
