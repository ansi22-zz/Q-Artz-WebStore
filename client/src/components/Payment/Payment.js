import React, { useEffect, useState } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, detailsOrder } from "../../actions/orderActions";

import { Container, Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import Footer from "../Footer/Footer";

function Payment(props) {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderId = props.match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const dispatch = useDispatch();

  // console.log(order);
  useEffect(() => {
    const addPayPalScript = async () => {
      const { data } = await axios.get("/api/config/paypal");
      console.log(data);
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order) {
      // console.log(1);
      dispatch(detailsOrder(orderId));
    } else {
      if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript();
        } else {
          setSdkReady(true);
        }
      }
    }
  }, [dispatch, order, orderId, sdkReady]);
  // console.log(order);

  const successPaymentHandler = () => {};
  const goBack = (e) => {
    e.preventDefault();

    props.history.push("/artwork");
  };

  return (
    <div>
      {userInfo ? (
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={6}>
            <Typography
              component="h5"
              variant="h5"
              style={{ marginTop: "20px" }}
            >
              <u> Order Details: </u>
            </Typography>
            {order._id}

            {}
            <br />
            {!order.isPaid && (
              <>
                {!sdkReady ? (
                  <>{loading}</>
                ) : (
                  <PayPalButton
                    amount={order.totalPrice}
                    onSuccess={successPaymentHandler}
                  ></PayPalButton>
                )}
              </>
            )}
            <Button
              variant="contained"
              style={{
                backgroundColor: "#3e2e59",
                marginTop: "15px",
                width: "200px",
              }}
              onClick={goBack}
            >
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Go Back to Product Screen!
              </Typography>
            </Button>
          </Paper>
        </Container>
      ) : (
        <></>
      )}

      <Footer />
    </div>
  );
}

export default Payment;
