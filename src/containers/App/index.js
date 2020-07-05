import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../../components/Header";
import Main from "../Main";
import DatePicker from "../../components/DatePicker";

const App = () => (
  <BrowserRouter>
    <Header />
    <DatePicker />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/serial/:id" component={() => <div>Serial id</div>} />
    </Switch>
  </BrowserRouter>
);

export default App;
