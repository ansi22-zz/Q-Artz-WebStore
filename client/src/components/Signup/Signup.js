import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/userAction";
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

function Signup(props) {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const userSignup = useSelector((state) => state.userSignup);
  const { loading, userInfo, error } = userSignup;

  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {};
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      <p>Required</p>;
    } else {
      dispatch(signup(name, email, password));
      props.history.push("/signin");
    }
  };

  const submitHandler2 = (e) => {
    e.preventDefault();
    props.history.push("signin");
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={6}>
          <LockOutlinedIcon
            style={{
              marginTop: "30px",
              fontSize: "35px",
              backgroundColor: "#3e2e59",
              color: "white",
            }}
          />
          <br />
          <Typography component="h5" variant="h5">
            SIGN-UP
          </Typography>
          <form className={classes.form} onSubmit={submitHandler}>
            {loading && <></>}
            {error && <div>{error}</div>}
            <TextField
              className={classes.text}
              id="outlined-multiline-flexible"
              label="Name"
              multiline
              maxRows={4}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              error={name === ""}
              helperText={name === "" ? "Required" : " "}
            />

            <TextField
              className={classes.text}
              id="outlined-multiline-flexible"
              label="E-mail"
              multiline
              maxRows={4}
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
              maxRows={4}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              error={password === ""}
              helperText={password === "" ? "Required" : " "}
            />

            <TextField
              className={classes.text}
              id="outlined-multiline-flexible"
              label="Confirm Password"
              multiline
              onChange={(e) => setRePassword(e.target.value)}
              variant="outlined"
              error={rePassword === ""}
              helperText={rePassword === "" ? "Required" : " "}
            />

            <Button
              variant="contained"
              style={{
                backgroundColor: "#3e2e59",
                marginLeft: "150px",
                marginTop: "15px",
              }}
              onClick={submitHandler}
            >
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Signup
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
                SIGNIN
              </Typography>
            </Button>
          </form>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}

export default Signup;
