import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
//using aux, could use array or single div
const Layout = props => (
  <Aux>
    <div> Toolbar, SideDrawer, Backdrop </div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default Layout;
