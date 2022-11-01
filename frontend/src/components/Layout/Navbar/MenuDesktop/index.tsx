//Helpers
import actions from "../../../../store/actions";
// Components
import { Fragment } from "react";
import { Button } from "@material-ui/core";
import { ExitToApp } from "@material-ui/icons";
import { Link } from "../../../index";
// Hooks
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

export default function MenuDesktop() {
  const { auth } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const classes = useStyles();

  async function handleLogout() {
    dispatch(actions.deauthenticate());
  }

  return (
    <Fragment>
      <div className={classes.sectionDesktop}>
        {!auth ? (
          <>
            <Button
              aria-label="create account for user"
              variant="contained"
              color="secondary"
              className={classes.createAccountButton}
              component={Link}
              naked
              href="/register"
            >
              Create account
            </Button>
            <Button color="inherit" component={Link} naked href="/login">
              Login
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} naked href="/">
              Home
            </Button>
            <Button color="inherit" component={Link} naked href="/profile">
              Profile
            </Button>
            <Button color="inherit" onClick={handleLogout}>
              <ExitToApp /> Logout
            </Button>
          </>
        )}
      </div>
    </Fragment>
  );
}
