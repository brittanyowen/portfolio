import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, GitHub} from "react-feather"

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="logo">
        <Link to="/">
          <img src="https://imgur.com/KXfegqy.png" alt="personal logo" />
        </Link>
      </div>
      <div className="icon-links">
        <a
          href="https://www.linkedin.com/in/bnowen/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/brittanyowen"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
