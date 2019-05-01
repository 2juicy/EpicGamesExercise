import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Bliss from "./pages/bliss/Bliss";
import { Switch, Route } from "react-router";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.loading) return null;

    return (
      <div className="App">
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} basename="/" />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/bliss" component={Bliss} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
