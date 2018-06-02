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
        <button className="Navbar-sidebar-close" onClick={ this.props.handleClick }>
          <svg>
            <line x1="1" y1="11" 
                  x2="11" y2="1" 
                  stroke="black" 
                  strokeWidth="2"/>
            <line x1="1" y1="1" 
                  x2="11" y2="11" 
                  stroke="black" 
                  strokeWidth="2"/>
          </svg>
        </button>
        <br/>
        <ul className="Navbar-sidebar-links" role="navigation">
          <Links name={"Navbar-sidebar-link"} />
        </ul>
      </div>
    );
  }
}