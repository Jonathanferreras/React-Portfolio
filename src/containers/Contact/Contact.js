import React, { Component } from "react";
import { Navbar, Background } from "../../components";

const log = console.log;

export default class Contact extends Component {
  render() {
    let page = this.props.location.pathname;

    return(
      <div className="About">
        <Background current={page}/>
        <Navbar />
        Contact
      </div>
    );
  }
}