import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { addToCart } from "../../actions/cartActions";
import { removeFromCart } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";
import { Container, Grid, Button, Paper } from "@material-ui/core";
import Footer from "../Footer/Footer";

function Cart(props) {
  const classes = useStyles();
  const theme = useTheme();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const productId = props.match.params.id;

  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();

  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  };

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  const checkoutHandler = () => {
    props.history.push("/shipping");
  };

  const goBack = () => {
    props.history.push("/artwork");
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>{}</div>

      {cartItems.length === 0 ? (
        <>
          <Container>
            <Paper className={classes.empty} paper elevation={6}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#3e2e59",
                  margin: "auto",
                  marginTop: "30px",
                  marginLeft: "100px",
                }}
                onClick={goBack}
                className="button primary full-width"
              >
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  CART IS EMPTY, GO SHOP NOW.
                </Typography>
              </Button>
            </Paper>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Grid
              className={classes.gridContainer}
              container
              justify="space-between"
              alignItems="stretch"
            >
              <Grid item xs={12} sm={8} md={9} lg={9}>
                {cartItems.map((item) => (
                  <>
                    <Card className={classes.root} raised elevation={6}>
                      <CardMedia className={classes.cover} image={item.image} />
                      <div className={classes.details}>
                        <CardContent className={classes.content}>
                          <Typography component="h5" variant="h5">
                            {item.name} | ₹ {item.price}
                          </Typography>
                          {/*  */}
                          Qty:
                          <select
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(addToCart(item.product, e.target.value))
                            }
                          >
                            {[...Array(item.countInStock).keys()].map((x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            ))}
                          </select>
                          <br />
                          <br />
                          remove from cart
                          <DeleteIcon
                            type="button"
                            className="button"
                            onClick={() => removeFromCartHandler(item.product)}
                            style={{ color: "#3e2e59" }}
                          />
                        </CardContent>
                      </div>
                    </Card>
                    <br />
                  </>
                ))}
              </Grid>
              <br />
              <Grid item xs={12} sm={4} md={3} lg={3}>
                <Paper className={classes.paper} raised elevation={6}>
                  <Container component="main" maxWidth="xs">
                    <Typography component="h6" variant="h6">
                      No. of Items: {cartItems.length}
                    </Typography>
                    <Typography component="h6" variant="h6">
                      Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)}{" "}
                      items) : ${" "}
                      {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                    </Typography>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#3e2e59",

                        marginTop: "15px",
                      }}
                      onClick={checkoutHandler}
                      className="button primary full-width"
                      disabled={cartItems.length === 0}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{ color: "white" }}
                      >
                        Proceed to Checkout
                      </Typography>
                    </Button>
                  </Container>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      )}

      <Footer />
    </>
  );
}

export default Cart;
