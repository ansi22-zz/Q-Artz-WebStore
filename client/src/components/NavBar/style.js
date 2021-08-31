import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "30px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    // fontFamily: "Andada Pro",
    fontFamily: "Poppins",
    fontSize: "25px",
    "&:hover": {
      color: "#8167a9",
      textDecoration: "underline",
    },
  },
  title_1: {
    flexGrow: 1,
    color: "white",
    // fontFamily: "Andada Pro",
    fontFamily: "Poppins",
    fontSize: "15px",
    "&:hover": {
      color: "#8167a9",
      textDecoration: "underline",
    },
  },
}));
