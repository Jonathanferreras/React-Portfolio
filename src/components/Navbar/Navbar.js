import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MenuBtn } from "./MenuBtn";
import { Logo } from "./Logo";
import { Links } from "./Links";
import { Sidebar } from "./Sidebar";

const log = console.log;

export default class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = { sidebar: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ sidebar: !(this.state.sidebar) });
  }

  render() {
    return(
      <div className="Navbar">
        <div className="container">
          <ul className="Navbar-Nav" role="navigation">
            <MenuBtn handleClick={ this.handleClick }/>
            <Logo />
            <Links name={"Navbar-link"} />
          </ul>
        </div>
        <Sidebar isVisible={ this.state.sidebar } handleClick={ this.handleClick }/>
      </div>
    );
  }
}