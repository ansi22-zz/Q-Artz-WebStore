import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    height: "450px",
    width: "400px",
  },
  form: {
    marginTop: "20px",

    // justifyContent: "center",
  },
  text: {
    width: "300px",
    marginTop: "12px",
    marginLeft: "45px",
  },
}));
