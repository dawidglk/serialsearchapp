import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../Main";
import SerialPage from "../SerialPage";
import Error from "../../components/Error";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/serial/:id" component={SerialPage} />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default App;
