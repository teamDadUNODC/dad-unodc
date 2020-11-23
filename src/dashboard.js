import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import HighlightedText from "./components/HighlightedText";
import DonorDash from "./components/donorDash";
import BeneficiaryDash from "./components/beneficiaryDash";
import MerchantDash from "./components/merchantDash";
import Modal from "./components/Modal";

import { Route, Switch, Link } from "react-router-dom";
import "./css/dash.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  logout: {
    backgroundColor: "red",
    color: "blue"
  }
}));

class Dashboard extends Component {
  state = {
    modal: null
  };

  openModal = (type) => {
    console.log(type);
    this.setState({
      modal: "donate"
    });
  };

  closeModal = () => {
    this.setState({
      modal: null
    });
  };

  submit = (type) => {
    console.log(type);
  };

  render() {
    const { classes } = this.props;

    const donor = (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <HighlightedText />
              <Link to="/login/donor">
                <Button className={classes.logout}>Logout</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <DonorDash />
      </div>
    );

    const beneficiary = (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <HighlightedText />
              <Link to="/login/beneficiary">
                <Button>Logout</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <BeneficiaryDash openModal={() => this.openModal("donate")} />
      </div>
    );
    const merchant = (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <HighlightedText />
              <Link to="/login/merchant">
                <Button>Logout</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
        <MerchantDash />
      </div>
    );

    let modal = null;
    if (this.state.modal != null)
      modal = (
        <Modal
          type={this.state.modal}
          closeModal={this.closeModal}
          submit={(type) => this.submit(type)}
        />
      );

    return (
      <div>
        {modal}
        <Switch>
          <Route path="/dash/beneficiary" render={() => beneficiary} />
          <Route path="/dash/donor" render={() => donor} />
          <Route path="/dash/merchant" render={() => merchant} />
        </Switch>
      </div>
    );
  }
}

export default withStyles(useStyles)(Dashboard);
