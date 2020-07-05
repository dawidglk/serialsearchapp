import React from "react";
import { Link } from "react-router-dom";

import IconHome from "../IconHome";
import { AppBar, Toolbar } from "@material-ui/core";
import Title from "../Title";

const Header = () => (
  <AppBar color="primary" position="static">
    <Toolbar>
      <Link to="/" style={{ color: "white" }}>
        <IconHome />
      </Link>
      <Title>Serial Search App</Title>
    </Toolbar>
  </AppBar>
);

export default Header;
