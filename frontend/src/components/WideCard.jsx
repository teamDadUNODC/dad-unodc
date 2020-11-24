import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    width: "720px",
    background: "#333",
    color: "#fff",
    padding: '16px'
  },
  rootContent: {
    display: 'flex',
    width: '100%',
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  }
});

const WideCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.rootContent}>{props.children}</CardContent>
    </Card>
  );
};

export default WideCard;
