import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function Layout(props) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-children">
        <Nav />
        <div>{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
