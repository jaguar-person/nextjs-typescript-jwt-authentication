// Components
import Alert, { AlertProps } from "@material-ui/lab/Alert";
import { IconButton, Slide } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
// Hooks
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import actions from "../../../store/actions";

export default function Message(props: AlertProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { message, show, severity } = useSelector((state) => state.alert);

  return (
    <div className={classes.root}>
      <Slide direction="up" in={show} mountOnEnter unmountOnExit>
        <Alert
          className={classes.alert}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                dispatch(actions.hideAlert());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity={severity}
          variant="filled"
          {...props}
        >
          {message}
        </Alert>
      </Slide>
    </div>
  );
}
