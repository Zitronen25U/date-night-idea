import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import Login from "./Login";
import Profile from "./Profile";
import IsLoadingAndError from "./IsLoadingAndError";
import Footer from "./Footer";
import DateIdeas from "./DateIdeas";

class App extends React.Component {
  render() {
    console.log("app", this.props);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? (
                  <DateIdeas email={this.props.auth0.user.email} /> ////Change this
                ) : (
                  <Login />
                )}
              </Route>
              <Route exact path="/profile">
            <Profile />
            </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
