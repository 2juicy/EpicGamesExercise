import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/landing" component={Landing} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
