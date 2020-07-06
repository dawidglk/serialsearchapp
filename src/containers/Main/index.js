import React from "react";

import Search from "../../components/Search";
import SerialList from "../../components/SerialList";
import Header from "../../components/Header";
import { Container } from "@material-ui/core";

const Main = () => (
  <>
    <Header />
    <Container style={{ padding: 20 }}>
      <Search />
      <SerialList />
    </Container>
  </>
);

export default Main;
