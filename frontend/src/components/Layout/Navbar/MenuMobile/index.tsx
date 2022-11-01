// Helpers
import actions from "../../../../store/actions";
// Components
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { ExitToApp, MoreVert } from "@material-ui/icons";
import { Link } from "../../../";
// Hooks
import { MouseEvent, useState } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

export default function MenuMobile() {
  const { auth } = useSelector((state) => state.authentication);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  async function handleLogout() {
    handleClose();
    dispatch(actions.deauthenticate());
  }

  const mobileMenuId = "menu-mobile";
  return (
    <div className={classes.sectionMobile}>
      <IconButton
        aria-label="show more"
        aria-controls={mobileMenuId}
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreVert />
      </IconButton>
      {!auth ? (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} href="/register">
            Create account
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} href="/login">
            Login
          </MenuItem>
        </Menu>
      ) : (
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} component={Link} href="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={Link} href="/profile">
            Profile
          </MenuItem>
          <MenuItem onClick={handleLogout} component={Link} href="/login">
            <ExitToApp /> Logout
          </MenuItem>
        </Menu>
      )}
    </div>
  );
}
