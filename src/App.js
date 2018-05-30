import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "./components";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;