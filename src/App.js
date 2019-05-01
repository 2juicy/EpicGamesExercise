import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Subpage from "./pages/subpage/Subpage";
import { Switch, Route } from "react-router";

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/subpage" component={Subpage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
