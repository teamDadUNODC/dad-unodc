import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "720px"
  },
  head: {},
  headCell: {
    textAlign: "left",
    fontWeight: "bold"
  },
  body: {
    border: "0",
    color: "#fff"
  },
  row: {
    border: "0px",
    backgroundColor: "#4A4A4A",
    margin: "50px",
    padding: "25px"
  },
  cell: {
    color: "#fff"
  }
});

const TransactionTable = (props) => {
  const classes = useStyles();

  const head = props.data.head.map((val, i) => {
    return (
      <TableCell key={i} className={[classes.headCell, "col" + i].join(" ")}>
        {val}
      </TableCell>
    );
  });

  const body = props.data.body.map((val, i) => {
    return (
      <TableRow key={i} className={classes.row}>
        {val.map((cell, id) => {
          return (
            <TableCell
              key={id}
              className={[classes.cell, "bodyCell", "col" + id].join(" ")}
            >
              {cell}
            </TableCell>
          );
        })}
      </TableRow>
    );
  });

  return (
    <Table className={classes.root}>
      <TableHead>
        <TableRow className={classes.head}>{head}</TableRow>
      </TableHead>
      <TableBody className={classes.body}>{body}</TableBody>
    </Table>
  );
};

export default TransactionTable;
