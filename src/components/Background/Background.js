import React, { Component } from "react";

const log = console.log;

export default class Background extends Component {
  constructor(props){
    super(props);

    this.state = {
      home: "images/home-bg.jpeg",
      about: "images/about-bg.jpeg",
      portfolio: "",
      blog: "images/blog-bg.jpeg",
      contact: "images/contact-bg.jpg"
    };
  }

  render(){
    let state = this.state;
    let current = (((this.props.current).split("")).filter(letter => letter != "/")).join("");

    return(
      <div className="background">
        <div className="tint"></div>
        <img src={ state[current] != undefined? state[current] : state["home"] } />
      </div>
    );
  }
}

