import React from "react";
import HighlightedText from "./HighlightedText";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import WideButton from "./Sign-In-Button";
import "../styles.css";

const useStyles = makeStyles({
  textFeild: {
    width: "100%",
    margin: "15px auto"
  }
});

export default function BeneficiaryLogin() {
  const classes = useStyles();
  return (
    <form>
      <TextField
        type="tel"
        id="standard-basic"
        label="Phone Number"
        className={classes.textFeild}
      ></TextField>
      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        className={classes.textFeild}
      />
      <Link to="/dash/merchant">
        {/* <Button variant="contained">Log In</Button> */}
        <WideButton user="Merchant" />
      </Link>
    </form>
  );
}
