import React, { Component } from "react";

class MenuBtn extends Component{
  render(){
    return (
      <li className="Navbar-menu"> 
        <button className="Navbar-menu-btn" onClick={ this.props.handleClick }>              
          <div className="icon line1"></div>
          <div className="icon line2"></div>
          <div className="icon line3"></div>
        </button>
      </li>
    );
  }
}

export default MenuBtn;