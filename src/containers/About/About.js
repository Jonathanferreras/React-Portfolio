import React, { Component } from "react";
import { Navbar } from "../../components";

const log = console.log;

export default class About extends Component {
  render() {
    const url = "images/about-bg.jpeg";
    return(
      <div className="About">
        <Navbar />
        About
      </div>
    );
  }
}