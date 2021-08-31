import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../../actions/userAction";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import useStyles from "./style";
import Footer from "../Footer/Footer";

function Signin(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    // /console.log(1);
    if (email === "" || password === "") {
      <p>Required</p>;
    } else {
      dispatch(signin(email, password));
      props.history.push("/signin?redirect=artwork");
    }
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
    props.history.push("signup");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={6}>
          {loading && <></>}
          {error && <div>{error}</div>}
          <LockOutlinedIcon
            style={{
              marginTop: "65px",
              fontSize: "35px",
              backgroundColor: "#3e2e59",
              color: "white",
            }}
          />
          <br />
          <Typography component="h5" variant="h5">
            SIGN-IN
          </Typography>
          <form onSubmit={submitHandler} className={classes.form}>
            <TextField
              className={classes.text}
              id="outlined-multiline-flexible"
              label="E-mail"
              multiline
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              error={email === ""}
              helperText={email === "" ? "Required" : " "}
            />

            <TextField
              className={classes.text}
              id="outlined-multiline-flexible"
              label="Password"
              multiline
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              error={password === ""}
              helperText={password === "" ? "Required" : " "}
            />

            <Button
              variant="contained"
              style={{
                backgroundColor: "#3e2e59",
                marginLeft: "155px",
                marginTop: "15px",
              }}
              onClick={submitHandler}
            >
              <Typography variant="subtitle1" style={{ color: "white" }}>
                SIGNIN
              </Typography>
            </Button>

            <Button
              variant="contained"
              style={{
                backgroundColor: "#3e2e59",
                marginLeft: "100px",
                marginTop: "15px",
                width: "200px",
              }}
              onClick={submitHandler2}
            >
              <Typography variant="subtitle1" style={{ color: "white" }}>
                SIGNUP
              </Typography>
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default Signin;
