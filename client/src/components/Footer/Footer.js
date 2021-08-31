import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "./style.css";
function Footer() {
  return (
    <div className="footer">
      <div className="child">
        <FacebookIcon style={{ color: "#8167a9" }} />
        <TwitterIcon style={{ color: "#8167a9" }} />
        <InstagramIcon style={{ color: "#8167a9" }} />
      </div>
    </div>
  );
}

export default Footer;
