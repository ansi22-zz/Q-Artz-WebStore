import { makeStyles, useTheme } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "900px",
    height: "500px",
    margin: "auto",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    marginLeft: "20px",
  },
  cover: {
    width: "550px",
  },
  li: {
    textDecoration: "none",
  },
}));
