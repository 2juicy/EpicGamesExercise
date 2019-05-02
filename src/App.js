import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Subpage from "./pages/subpage/Subpage";
import { Switch, Route } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HashRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={400}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/landing" component={Landing} />
                    <Route exact path="/subpage" component={Subpage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
