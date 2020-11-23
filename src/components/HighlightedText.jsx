import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  half_background: {
    width: "86px",
    background: "linear-gradient(to top, #FFD736 50%, transparent 50%)",
    fontFamily: "Orbitron",
    fontSize: "30px",
    margin: "auto"
  }
});
const HighlightedText = () => {
  const classes = useStyles();
  return <Typography className={classes.half_background}>DAD</Typography>;
};

export default HighlightedText;
