import React, { Component } from "react";
import { Navbar, Background } from "../../components";
const log = console.log;

export default class Home extends Component {
  render() {
    let page = this.props.location.pathname;

    return(
      <div className="Home">
        <Background current={page}/>
        <Navbar />
        <div className="Home-container">
          <div className="Home-shutter shutter1"></div>
          <div className="Home-landing">
            <div className="container Home-heading">
              <span className="Home-title">DESIGN. DEVELOP. <span className="highlight">DELIVER.</span></span>
              <span className="Home-sub-title">FULLSTACK WEB DEVELOPER</span>
            </div>
          </div>
          <div >
            <button className="Home-learn-more">LEARN MORE</button>
          </div>
          <div className="Home-shutter shutter2"></div>
        </div>
      </div>
    );
  }
}