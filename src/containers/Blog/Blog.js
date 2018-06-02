import React, { Component } from "react";
import { Navbar, Background } from "../../components";

const log = console.log;

export default class Blog extends Component {
  render() {
    let page = this.props.location.pathname;

    return(
      <div className="Blog">
        <Background current={page}/>
        <Navbar />
        Blog
      </div>
    );
  }
}