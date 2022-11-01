// Components
import { Fragment, ReactElement } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import { LockOutlined } from "@material-ui/icons";
import { Link } from "../../";
// Hooks
import useStyles from "./styles";

interface HideOnScrollProps {
  window?: () => Window;
  children: ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface NavbarProps {
  window?: () => Window;
}

export default function Navbar(props: NavbarProps) {
  const classes = useStyles();
  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              naked
              href="/"
              className={classes.logo}
            >
              <LockOutlined />
              Next.js Auth
            </Typography>
            <div className={classes.grow} />
            <MenuDesktop />
            <MenuMobile />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Fragment>
  );
}
