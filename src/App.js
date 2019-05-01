import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Subpage from "./pages/subpage/Subpage";
import { Switch, Route } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/subpage" component={Subpage} />
        </Switch>
      </div>
    );
  }
}

export default App;
