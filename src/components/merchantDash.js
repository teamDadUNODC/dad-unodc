import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Icon, Typography } from "@material-ui/core";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import QRCode from "qrcode.react";

import WideCard from "./WideCard";
import Table from "./Table";

const useStyles = makeStyles({
  main: {
    width: "100%",
    padding: " 5px 25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  cardContainer: {
    display: "flex",
    height: "250px",
    justifyContent: "center"
  },
  card: {},
  cardContent: {
    width: "calc( 100% / 3)",
    float: "left",
    textAlign: "center"
  },
  transactionsContainer: {
    display: "flex",
    marginTop: "30px",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "left"
  },
  tableContainer: {
    display: "flex",
    justifyContent: "center"
  }
});

const MerchantDash = () => {
  const classes = useStyles();

  const tableData = {
    head: ["Value", "Date", "Type", "Tx"],
    body: [
      ["r1 val1", "r1 val2", "r1 val3", "r1 val4"],
      ["r2 val1", "r2 val2", "r2 val3", "r2 val4"],
      ["r3 val1", "r3 val2", "r3 val3", "r3 val4"],
      ["r4 val1", "r4 val2", "r4 val3", "r4 val4"]
    ]
  };

  return (
    <div className={classes.main}>
      <div className={classes.cardContainer}>
        <WideCard className={classes.card}>
          <div
            className={classes.cardContent}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between"
            }}
          >
            <div style={{ textAlign: "left" }}>
              <Typography variant="h4">$15.00</Typography>
              <Typography variant="h6">Balance</Typography>
            </div>
          </div>
          <div className={classes.cardContent}>
            <Typography>Scan to recieve</Typography>
            <QRCode value="getMerchantAddressMethod" />
          </div>
          <div
            className={classes.cardContent}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end"
            }}
          >
            <Button
              endIcon={<Icon style={{ color: "#fff" }}>send</Icon>}
              style={{ color: "#fff" }}
            >
              send
            </Button>
            <Button
              endIcon={<AccountBalanceWalletIcon />}
              style={{ color: "#fff" }}
            >
              Receive
            </Button>
          </div>
        </WideCard>
      </div>
      <div className={classes.transactionsContainer}>
        <Typography
          variant="h6"
          style={{ position: "relative", left: "-287px", top: "2px" }}
        >
          Transactions
        </Typography>
        .
        <div className={classes.tableContainer}>
          <Table data={tableData} />
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#333", color: "#fff", margin: "30px" }}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="default"
          style={{ margin: "30px 15px" }}
        >
          Recieve
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default MerchantDash;
