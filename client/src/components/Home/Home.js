import React from "react";
import Footer from "../Footer/Footer";
import img from "./imgb.jpg";
import "./style.css";
import { Paper, Typography } from "@material-ui/core";
function Home() {
  return (
    <>
      <div className="body__1">
        <Typography>SIGN-UP NOW TO PURCHASE THE BEST ARTWORK!</Typography>
      </div>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "70vh",
          marginTop: "9px",
        }}
      ></div>

      <Footer />
    </>
  );
}

export default Home;
