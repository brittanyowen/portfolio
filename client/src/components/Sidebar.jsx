import React from "react";
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* <Link to="/">B</Link> */}
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
          <img src="https://imgur.com/mUm6ZhK.png" alt="LinkedIn Logo" />
        </a>
        <br></br>
        <a
          href="https://github.com/brittanyowen"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://imgur.com/w6ZtRla.png" alt="GitHub Logo" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
