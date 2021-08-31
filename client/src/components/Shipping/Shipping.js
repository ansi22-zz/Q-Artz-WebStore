import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShipping } from "../../actions/cartActions";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import useStyles from "./style";
import Footer from "../Footer/Footer";

function Shipping(props) {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(1);
    if (country === "" || city === "" || address === "" || pincode === "") {
      <p>Input Required</p>;
    } else {
      dispatch(saveShipping({ country, city, address, pincode }));
      props.history.push("order");
    }
  };

  return (
    <div>
      {userInfo ? (
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={6}>
            <LocalShippingIcon
              style={{
                marginTop: "30px",
                fontSize: "35px",
                backgroundColor: "#3e2e59",
                color: "white",
              }}
            />
            <br />
            <Typography component="h5" variant="h5">
              SHIPPING-ADDRESS
            </Typography>
            <form className={classes.form} onSubmit={submitHandler}>
              <TextField
                className={classes.text}
                id="outlined-multiline-flexible"
                label="Country"
                multiline
                maxRows={4}
                onChange={(e) => setCountry(e.target.value)}
                variant="outlined"
                required="true"
                error={country === ""}
                helperText={country === "" ? "Required" : " "}
              />
              <TextField
                className={classes.text}
                id="outlined-multiline-flexible"
                label="City"
                multiline
                maxRows={4}
                onChange={(e) => setCity(e.target.value)}
                variant="outlined"
                required="true"
                error={city === ""}
                helperText={city === "" ? "Required" : " "}
              />
              <TextField
                className={classes.text}
                id="outlined-multiline-flexible"
                label="Address"
                multiline
                maxRows={4}
                onChange={(e) => setAddress(e.target.value)}
                variant="outlined"
                required="true"
                error={address === ""}
                helperText={address === "" ? "Required" : " "}
              />
              <TextField
                className={classes.text}
                id="outlined-multiline-flexible"
                label="Pin-Code"
                multiline
                maxRows={4}
                onChange={(e) => setPincode(e.target.value)}
                variant="outlined"
                required="true"
                error={pincode === ""}
                helperText={pincode === "" ? "Required" : " "}
              />

              <Button
                variant="contained"
                style={{
                  backgroundColor: "#3e2e59",
                  marginLeft: "148px",
                  marginTop: "15px",
                }}
                onClick={submitHandler}
              >
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  PROCEED
                </Typography>
              </Button>
            </form>
          </Paper>
        </Container>
      ) : (
        <></>
      )}

      <Footer />
    </div>
  );
}

export default Shipping;
