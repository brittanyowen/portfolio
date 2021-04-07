import React from 'react';
import { Switch, Route } from "react"
import Layout from "../layout/Layout"
import About from "../screens/About"
import Contact from "../screens/Contact"
import Projects from "../screens/Projects"

function MainContainer(props) {
  return (
    <Layout>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default MainContainer;