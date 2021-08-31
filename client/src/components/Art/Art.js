import React, { useState, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { detailsArtwork } from "../../actions/artworkActions";
import useStyles from "./style";
import Footer from "../Footer/Footer";

function Art(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [qty, setQty] = useState(1);

  const artworkDetails = useSelector((state) => state.artworkDetails);
  const { products, loading, error } = artworkDetails;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsArtwork(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  console.log(products);
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : !products ? (
        <></>
      ) : (
        <>
          <div style={{ marginTop: "100px" }}>{}</div>
          <Card className={classes.root} raised elevation={6}>
            <CardMedia className={classes.cover} image={products.image} />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {products.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {products.content}
                </Typography>
                <br />
                <Typography component="h5" variant="h5">
                  Original Artwork
                </Typography>
                <div
                  style={{
                    backgroundColor: "#F5F5F5",
                    marginTop: "5px",
                  }}
                >
                  <Typography variant="subtitle1" color="textSecondary">
                    Details:
                  </Typography>

                  <Typography variant="subtitle1" color="textSecondary">
                    12 X 8 In | 30 X 20 Cm
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Digital Print on Enhanced Matt !!
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Created in 2017
                    <br />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                  ></Typography>
                </div>
                <br />
                <Typography variant="subtitle1" color="textSecondary">
                  Price:
                </Typography>
                <Typography component="h5" variant="h5">
                  ₹ {products.price}
                </Typography>
                <br />
                {products.stockcount > 0 ? (
                  <Typography component="h6" variant="h6">
                    [ In-Stock ]
                    <Typography variant="subtitle1" color="textSecondary">
                      Select Quantity:{" "}
                      <select
                        value={qty}
                        onChange={(e) => {
                          setQty(e.target.value);
                        }}
                      >
                        {[...Array(products.stockcount).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </Typography>
                    <br />
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#3e2e59", size: "" }}
                      onClick={handleAddToCart}
                    >
                      <ShoppingCartIcon style={{ color: "white" }} />
                      <Typography
                        variant="subtitle1"
                        style={{ color: "white" }}
                      >
                        Add To Cart
                      </Typography>
                    </Button>
                  </Typography>
                ) : (
                  <Typography component="h6" variant="h6">
                    [ Unavailable ]
                  </Typography>
                )}
              </CardContent>
            </div>
          </Card>
        </>
      )}
      <Footer />
    </>
  );
}

export default Art;
