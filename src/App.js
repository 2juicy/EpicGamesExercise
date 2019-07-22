import React, { Component } from "react";
import Home from "./pages/home/Home";
import Landing from "./pages/landing/Landing";
import Subpage from "./pages/subpage/Subpage";
import Error from "./components/Error/Error";
import { Switch, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const loadingStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

class App extends Component {
  state = {
    content: [],
    loading: true,
    error: false
  };

  async componentDidMount() {
    try {
      const response = await fetch("content.json");
      if (!response.ok) {
        throw Error(!response.statusText);
      }
      const json = await response.json();
      this.setState({ content: json });
      this.setState({ loading: false });
    } catch (err) {
      this.setState({ error: true });
      console.error(err);
    }
  }

  render() {
    if (this.state.loading) {
      return this.state.error ? (
        <Error css={loadingStyle}>Error with request</Error>
      ) : (
        <img src="images/loading.gif" style={loadingStyle} alt="loading..." />
      );
    }

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
                    <Route
                      exact
                      path="/landing"
                      render={props => (
                        <Landing {...props} content={this.state.content} />
                      )}
                    />
                    <Route
                      exact
                      path="/subpage"
                      render={props => (
                        <Subpage {...props} content={this.state.content} />
                      )}
                    />
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
