import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, detailsOrder } from "../../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constatnts/orderConstants";

import { Container, Paper, Typography, Button } from "@material-ui/core";
import useStyles from "./style";
import Footer from "../Footer/Footer";

function Order(props) {
  const classes = useStyles();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const cart = useSelector((state) => state.cart);
  const { shipping } = cart;

  // console.log(shipping);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
  };
  // console.log(order);

  useEffect(() => {
    if (success) {
      console.log(order);
      props.history.push(`/payment/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, props.history, success]);

  return (
    <div>
      {userInfo ? (
        <Container component="main" maxWidth="xs">
          <Paper className={classes.paper} elevation={6}>
            {loading && <></>}
            {error && <div>{error}</div>}
            <br />
            <Typography
              component="h5"
              variant="h5"
              style={{ color: "#3e2e59" }}
            >
              <u> Order & Shipping Details</u>
            </Typography>
            <Typography component="h6" variant="h6">
              <u> Order Details: </u>
            </Typography>
            <Typography component="h6" variant="h6">
              No. of Items : {cart.cartItems.length}
            </Typography>
            <Typography component="h6" variant="h6">
              Price : {cart.itemsPrice}
            </Typography>
            <Typography component="h6" variant="h6">
              Tax : {cart.taxPrice}
            </Typography>
            <Typography component="h6" variant="h6">
              Net-Price : {cart.totalPrice}
            </Typography>
            <br />
            <Typography component="h6" variant="h6">
              <u> Shipping Details</u>
            </Typography>
            <Typography component="h6" variant="h6">
              Country: {shipping.country}
            </Typography>
            <Typography component="h6" variant="h6">
              City: {shipping.city}
            </Typography>
            <Typography component="h6" variant="h6">
              Address: {shipping.address}
            </Typography>
            <Typography component="h6" variant="h6">
              Pincode: {shipping.pincode}
            </Typography>

            <Button
              variant="contained"
              disabled={cart.cartItems.length === 0}
              style={{
                backgroundColor: "#3e2e59",
                marginTop: "15px",
              }}
              onClick={placeOrderHandler}
            >
              <Typography variant="subtitle1" style={{ color: "white" }}>
                Place-Order
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

export default Order;
