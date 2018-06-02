import React, { Component } from "react";
import { Navbar, Background } from "../../components";
const log = console.log;

export default class Portfolio extends Component {
  render() {
    let page = this.props.location.pathname;
 
    return(
      <div className="Portfolio">
        <Background current={page}/>
        <Navbar />
        Portfolio
      </div>
    );
  }
}