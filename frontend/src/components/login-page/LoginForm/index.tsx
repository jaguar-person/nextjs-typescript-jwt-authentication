// Helpers And Types
import actions from "../../../store/actions";
import { ChangeEventType, FormEventType } from "../../../../interfaces";
// Components
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";

import { LockOutlined } from "@material-ui/icons";
import { Link } from "../../index";
// Hooks
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { useState } from "react";

const INITIAL_VALUES = {
  username: "",
  password: "",
};

export default function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [values, setValues] = useState(INITIAL_VALUES);

  function handleChange(event: ChangeEventType) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: FormEventType) {
    event.preventDefault();
    dispatch(actions.authenticate(values, "login"));
  }

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={handleChange}
              value={values.username}
              helperText={"You also can use your email"}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={values.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Create one"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
