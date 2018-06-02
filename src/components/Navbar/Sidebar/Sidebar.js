import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Links } from "../Links";

const log = console.log;

export default class Sidebar extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let visible = this.props.isVisible == true ? { left: 0 } : {};

    return(
      <div className="Navbar-sidebar" style={ visible }>
        <button className="Navbar-sidebar-close" onClick={ this.props.handleClick }>X</button>
        <br/>
        <span>Menu</span>
        <br/>
        <ul className="Navbar-sidebar-links" role="navigation">
          <Links name={"Navbar-sidebar-link"} />
        </ul>
      </div>
    );
  }
}