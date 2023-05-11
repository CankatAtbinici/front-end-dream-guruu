import React from "react";
import Navbar from "../navbar/Index"


function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
