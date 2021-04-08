import React from "react";
import { Switch, Route } from "react-router-dom";
import projects from "../projects.json"
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Projects from "../screens/Projects";

function MainContainer(props) {
  return (
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/projects">
        <Projects projects={projects}/>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default MainContainer;
