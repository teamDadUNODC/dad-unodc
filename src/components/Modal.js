import { Card, Paper, TextField, Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  backdrop: {
    position: "absolute",
    zIndex: "100",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,0.35)"
  },
  card: {
    position: "absolute",
    zIndex: "500",
    backgroundColor: "#fff",
    width: "500px",
    height: "500px",
    top: "calc(50% - 250px)",
    left: "calc(50% - 250px)"
  }
});

const Modal = (props) => {
  const classes = useStyles();
  return (
    <div onClick={props.closeModal} className={classes.backdrop}>
      <Paper className={classes.card}>
        <h2>{props.type}</h2>
        <form>
          <TextField />
          <TextField />
          <Button type="button" onClick={() => props.submit("send")}>
            Send
          </Button>
          <Button onClick={props.closeModal}>Cancel</Button>
        </form>
      </Paper>
    </div>
  );
};

export default Modal;
