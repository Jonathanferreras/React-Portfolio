import React from "react";
import { Link } from "react-router-dom";

const links = ["HOME", "ABOUT", "PORTFOLIO", "BLOG", "CONTACT"];

const Links = (props) => {
  return (
      links.map((link, index) => {
      return <li className={ props.name } key={index.toString()}>
        <Link to={"/" + (link != "HOME"? link.toLowerCase() : "")}>{ link }</Link></li>;})
  );
};

export default Links;