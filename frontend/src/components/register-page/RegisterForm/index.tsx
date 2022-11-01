// Helpers And Types
import actions from "../../../store/actions";
import { FormValuesType } from "../../../../interfaces";
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
import validateRegister from "./validateRegister";
import { useDispatch } from "react-redux";
import useFormValidation from "../../../hooks/useFormValidation";
import useStyles from "./styles";

const INITIAL_VALUES = {
  username: "",
  email: "",
  password: "",
};

export default function RegisterForm() {
  const classes = useStyles();

  const {
    values: { email, password, username },
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormValidation(INITIAL_VALUES, validateRegister);
  const dispatch = useDispatch();

  function submitFunction(values: FormValuesType) {
    dispatch(actions.authenticate(values, "register"));
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
            Create account
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(submitFunction)}
          >
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
              onBlur={handleBlur}
              value={username}
              error={Boolean(errors.username && touched.username)}
              helperText={errors.username}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={email}
              error={Boolean(errors.email && touched.email)}
              helperText={errors.email}
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
              onBlur={handleBlur}
              value={password}
              error={Boolean(errors.password && touched.password)}
              helperText={errors.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Create account
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Log In "}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
