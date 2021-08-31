import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Artwork from "./Artwork";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listArtworks } from "../../actions/artworkActions";
import { Container } from "@material-ui/core";
import Footer from "../Footer/Footer";

function Artworks() {
  const classes = useStyles();

  const artworkList = useSelector((state) => state.artworkList);
  const { loading, error } = artworkList;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listArtworks());
  }, []);

  // console.log(artworkList.products);

  return (
    <div>
      {userInfo ? (
        <>
          {loading ? (
            <></>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Container>
              <Grid className={classes.container} container spacing={4}>
                {artworkList.products.map((artwork) => (
                  <Grid key={artwork._id} item xs={12} sm={6} md={4} lg={3}>
                    <Link
                      to={"/art/" + artwork._id}
                      style={{ textDecoration: "none" }}
                    >
                      <Artwork
                        name={artwork.name}
                        image={artwork.image}
                        price={artwork.price}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </>
      ) : (
        <></>
      )}

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Artworks;
