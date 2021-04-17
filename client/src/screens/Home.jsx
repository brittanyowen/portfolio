import React from "react";
// import { ChevronsRight } from "react-feather";
// import {Link} from "react-router-dom"

function Home(props) {
  return (
    <div className="home">
      <div className="headshot">
        <img src="https://imgur.com/Waudpwd.png" alt="Brittany Owen headshot, 2021"/>
      </div>
      <div>
      <p className="name">Hi, I'm Brittany</p>
      <br></br>
      <p>full-stack software engineer | environmentalist | book worm</p>
      </div>
      {/* <br></br>
      <div>
      <Link to="/about">
        <ChevronsRight height="50px" width="50px" />
      </Link>
      </div> */}
    </div>
  );
}

export default Home;
