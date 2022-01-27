import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <React.Fragment>
      <div className={classes.content}>
        <div className={classes.header}>
          <MainHeader />
          <main>{props.children}</main>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Layout;
