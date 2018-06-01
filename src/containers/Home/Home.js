import React, { Component } from "react";
import { Navbar } from "../../components";
const log = console.log;

export default class Home extends Component {
  render() {
    return(
      <div className="Home">
        <Navbar />
        Home
      </div>
    );
  }
}