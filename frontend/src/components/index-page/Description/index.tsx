// Components
import { Typography } from "@material-ui/core";
// Hooks
import useStyles from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <Typography variant={"h3"} component={"h1"} align={"center"}>
        Authentication with Next.js and JWT
      </Typography>
      <img
        alt={"Next.js logo"}
        src={"/img/nextjs.png"}
        className={classes.nextLogo}
      />
    </section>
  );
}
