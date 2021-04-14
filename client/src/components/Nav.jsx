import React, { useState } from "react";
import { Link } from "react-router-dom";

// hamburger menu tutorial: https://ibaslogic.com/how-to-add-hamburger-menu-in-react/

function Nav(props) {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  const closeMenu = () => {
    setNavOpen(false);
  };

  return (
    <nav>
      <div className="burger-menu">
        <button className="burger" onClick={handleToggle}>
          {navOpen ? (
            <img
              src="https://imgur.com/ndd808k.png"
              alt="burger menu"
              style={{ height: "30px" }}
            />
          ) : (
            <img
              src="https://imgur.com/RNCJXa9.png"
              alt="burger menu"
              style={{ height: "30px" }}
            />
          )}
        </button>
        <ul className={`menuNav ${navOpen ? "showMenu" : ""}`}>
          <Link
            to="/about"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            About
          </Link>
          <Link
            to="/projects"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Projects
          </Link>
          <Link
            to="/contact"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1k9jGTJ30GeF9Y9OepzjbHQKJCsup8V-o/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            activeClassName="active-link"
            onClick={() => closeMenu()}
            exact
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/bnowen/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://imgur.com/mUm6ZhK.png" alt="LinkedIn Logo" />
          </a>
          <a
            href="https://github.com/brittanyowen"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://imgur.com/w6ZtRla.png" alt="GitHub Logo" />
          </a>
        </ul>
      </div>

      <div className="horizontal-nav">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="https://drive.google.com/file/d/1k9jGTJ30GeF9Y9OepzjbHQKJCsup8V-o/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Nav;
