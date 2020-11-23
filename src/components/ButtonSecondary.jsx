import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  wideButton: {
    width: "200px",
    height: "60px",
    color: "#170101",
    background: "#fff",
    borderRadius: "6px",
    marginTop: "80px",
    border: 0
  }
});

function WideButton(props) {
  const classes = useStyles();
  return (
    <Button class={classes.wideButton}>Sign In as {props.children}</Button>
  );
}

export default WideButton;
