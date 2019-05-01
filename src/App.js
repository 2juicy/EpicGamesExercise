import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Subpage from "./pages/subpage/Subpage";
import { Switch, Route } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  // This code block is not necessary yet unless I need to make API fetch requests
  // state = {
  //   loading: true
  // };

  // componentDidMount() {
  //   this.setState({ loading: false });
  // }
  // ==================================================================================== //
  render() {
    // if (this.loading) return null;

    return (
      <div className="App">
        <TransitionGroup>
          <CSSTransition timeout={450} className="fade">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/subpage" component={Subpage} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
