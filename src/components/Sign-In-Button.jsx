import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  wideButton: {
    width: "200px",
    height: "60px",
    color: "#fff",
    background: "#170101",
    borderRadius: "6px",
    margin: "25% auto 0 auto",
    border: "0"
  }
});

function WideButton(props) {
  const classes = useStyles();
  return <Button class={classes.wideButton}>Sign In as {props.user}</Button>;
}

export default WideButton;
