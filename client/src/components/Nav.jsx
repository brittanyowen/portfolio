import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
      <a href ="https://drive.google.com/file/d/1k9jGTJ30GeF9Y9OepzjbHQKJCsup8V-o/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
    </nav>
  );
}

export default Nav;
