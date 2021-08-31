import { makeStyles, useTheme } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "400px", //400
    height: "150px", //150
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
    width: "150px",
  },
  li: {
    textDecoration: "none",
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  paper: {
    height: "200px",
  },
  empty: {
    margin: "auto",
    width: "500px",
    height: "100px",
  },
}));
