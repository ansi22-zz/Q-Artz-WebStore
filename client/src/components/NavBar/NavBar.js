import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

import StorefrontIcon from "@material-ui/icons/Storefront";
import { NavLink, Link } from "react-router-dom";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions/userAction";

function NavBar() {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: "#14151A" }}>
        <Toolbar>
          <StorefrontIcon
            style={{ color: "white", fontSize: "30px", padding: "4px" }}
          />

          <Typography variant="h6" className={classes.title}>
            Q-ARTZ
          </Typography>

          {userInfo ? (
            <>
              <NavLink to="/artwork" style={{ textDecoration: "none" }}>
                <Button>
                  <Typography className={classes.title_1}>Artworks</Typography>
                </Button>
              </NavLink>

              <NavLink to="/cart" style={{ textDecoration: "none" }}>
                <Button>
                  <Typography className={classes.title_1}>Cart</Typography>
                </Button>
              </NavLink>

              <Button>
                <Typography className={classes.title_1}>
                  {userInfo.name}
                </Typography>
              </Button>

              <NavLink to="/" onClick={signoutHandler}>
                <Button>
                  <Typography className={classes.title_1}>Sign-Out</Typography>
                </Button>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/signin" style={{ textDecoration: "none" }}>
                <Button>
                  <Typography className={classes.title_1}>SIGN-IN</Typography>
                </Button>
              </NavLink>

              <NavLink to="/signup" style={{ textDecoration: "none" }}>
                <Button>
                  <Typography className={classes.title_1}>SIGN-UP</Typography>
                </Button>
              </NavLink>
            </>
          )}

          <Button>
            <a href="https://github.com/Ansi-Q">
              <GitHubIcon style={{ color: "white", fontSize: "28px" }} />
            </a>
          </Button>
        </Toolbar>
      </AppBar>
      <AppBar
        position="fixed"
        color="inherit"
        style={{ height: "30px", marginTop: "55px", background: "#3e2e59" }}
      />
    </div>
  );
}

export default NavBar;
