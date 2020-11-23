import React from "react";
import HighlightedText from "./components/HighlightedText";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch, Link } from "react-router-dom";
import "./css/login.css";
import Button from "./components/ButtonSecondary";
import BeneficiaryLogin from "./components/beneficiaryLogin";
import DonorLogin from "./components/donorLogin";
import MerchantLogin from "./components/merchantLogin";

const useStyles = makeStyles({
  paper: {
    width: "500px",
    margin: "25px auto",
    padding: "25px 50px",
    textAlign: "center"
  }
});

export default function Login() {
  const classes = useStyles();
  const donor = (
    <div>
      <DonorLogin />
      <Link to="/login/beneficiary">
        <Button>Beneficiary</Button>
      </Link>
      <Link to="/login/merchant">
        <Button>Merchant</Button>
      </Link>
    </div>
  );

  const beneficiary = (
    <div>
      <BeneficiaryLogin />
      <Link to="/login/donor">
        <Button>Donor</Button>
      </Link>
      <Link to="/login/merchant">
        <Button>Merchant</Button>
      </Link>
    </div>
  );

  const merchant = (
    <div>
      <MerchantLogin />
      <Link to="/login/donor">
        <Button>Donor</Button>
      </Link>
      <Link to="/login/beneficiary">
        <Button>Beneficiary</Button>
      </Link>
      {/* Link is used as an '<a href></a> tag but it doesnt reload the page only redirects
    w/c intern triggers a rerender , and since we gave it the path we want it allows us to render
    the component we want*/}
    </div>
  );

  return (
    <div className="Login">
      <Paper className={classes.paper} elevation={3}>
        <div>
          <HighlightedText text="DAD" />
          <Switch>
            <Route path="/login/beneficiary" render={() => beneficiary} />
            <Route path="/login/donor" render={() => donor} />
            <Route path="/login/merchant" render={() => merchant} />
            {/* here it checks the full path and renders the correspending component */}
          </Switch>
        </div>
      </Paper>
    </div>
  );
}
