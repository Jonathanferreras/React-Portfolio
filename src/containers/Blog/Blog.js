import React, { Component } from "react";
import { Navbar } from "../../components";

const log = console.log;

export default class Blog extends Component {
  render() {
    return(
      <div className="Blog">
        <Navbar />
        Blog
      </div>
    );
  }
}