import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GitHub, Linkedin, Menu, X } from "react-feather";

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
          {navOpen ? "" : <Menu />}
        </button>
        <ul className={`menuNav ${navOpen ? "showMenu" : ""}`}>
          <button className="burger" id="exit" onClick={handleToggle}>
            {navOpen ? <X /> : ""}
          </button>
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
            href="https://drive.google.com/file/d/1LTyt83rbaQEIcBi2Ha5sP2wzx2Jkq2n2/view?usp=sharing"
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
            <Linkedin />
          </a>
          <a
            href="https://github.com/brittanyowen"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </ul>
      </div>

      <div className="horizontal-nav">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <a
          href="https://drive.google.com/file/d/1LTyt83rbaQEIcBi2Ha5sP2wzx2Jkq2n2/view?usp=sharing"
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
