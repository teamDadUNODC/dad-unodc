import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import "./styles.css";
import Login from "./login";
import Dash from "./dashboard";

const useStyles = makeStyles({
  paper: {
    width: "250px",
    height: "600px",
    padding: "60px 100px"
  }
});

class App extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dash" component={Dash} />
            <Route
              render={() => {
                return <Redirect to="/login/beneficiary" />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
