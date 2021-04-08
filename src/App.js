import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";

import Header from "./Header";
import Login from "./Login";
import Profile from "./Profile";
import IsLoadingAndError from "./IsLoadingAndError";
import DateIdeas from "./DateIdeas";
import Bio from "./Bio";

import bg from "./assets/bg.jpeg";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedDates: [],
      savedDrinks:[],
    };
  }

  saveDateHandler = (savedDates) => {
    this.setState({ savedDates});
  };
  saveDrinkHandler = (savedDrinks)=>{
    this.setState({savedDrinks})
  }

  render() {
    var divStyle = {
      backgroundImage: `url(${bg})`,
      height: "auto",
      minHeight: "100vh",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      overflow: "auto",
    };
    return (
      <div style={divStyle}>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {this.props.auth0.isAuthenticated ? (
                  <DateIdeas
                    email={this.props.auth0.user.email}
                    saveDateHandler={this.saveDateHandler}
                    saveDrinkHandler={this.saveDrinkHandler}
                  /> ////Change this
                ) : (
                  <Login />
                )}
              </Route>
              <Route exact path="/profile">
                <Profile savedDates={this.state.savedDates} />
              </Route>
              <Route exact path="/bio">
                <Bio />
              </Route>
            </Switch>
          </IsLoadingAndError>
        </Router>
      </div>
    );
  }
}

export default withAuth0(App);
