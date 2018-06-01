import React, { Component } from "react";
import { Link } from "react-router-dom";

import { MenuBtn } from "./MenuBtn";
import { Logo } from "./Logo";
const log = console.log;

export default class Navbar extends Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {

  }

  render() {
    const logo = "JF";
    const links = ["HOME", "ABOUT", "PORTFOLIO", "BLOG", "CONTACT"];

    return(
      <div className="Navbar">
        <div className="container">
          <ul className="Navbar-Nav" role="navigation">
            <MenuBtn />
            <Logo />

            { 
              links.map((link, index) => {
              return <li className="Navbar-link" key={index.toString()}>
                <Link to={"/" + (link != "HOME"? link.toLowerCase() : "")}>{ link }</Link></li>;})
            }
          </ul>
        </div>

        <div className="Navbar-slide-in">
          <button className="Navbar-slide-in-close">X</button>
          <br/>
          <span>Menu</span>
          <ul className="Navbar-slide-in-links" role="navigation">
            { 
              links.map((link, index) => {
              return <li className="Navbar-slide-in-link" key={index.toString()}>
                <Link to={"/" + (link != "HOME"? link.toLowerCase() : "")}>{ link }</Link></li>;})
            }
          </ul>       
        </div>

      </div>
    );
  }
}