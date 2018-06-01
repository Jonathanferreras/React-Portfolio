import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <ul className="Navbar-links" role="navigation">

            <li className="Navbar-menu"> 
              <button className="Navbar-menu-btn">              
                <div className="icon line1"></div>
                <div className="icon line2"></div>
                <div className="icon line3"></div>
              </button>
            </li>   

            <li className="Navbar-brand"><Link to="/">LOGO</Link></li>

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