import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { Home, About } from "./containers";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Home }/>
        <Route path="/ABOUT" component={ About }/>
      </div>
    );
  }
}

export default App;