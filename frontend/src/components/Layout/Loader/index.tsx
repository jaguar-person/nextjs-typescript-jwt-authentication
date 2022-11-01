// Components
import { Backdrop, CircularProgress } from "@material-ui/core";
// Hooks
import useStyles from "./styles";
import { useSelector } from "react-redux";

export default function Loader() {
  const { show } = useSelector((state) => state.loader);
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={show}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
