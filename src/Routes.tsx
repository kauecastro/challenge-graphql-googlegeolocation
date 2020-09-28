import * as React from "react";
import Home from "../src/pages/Home/index";
import Products from "../src/pages/Products/index";
import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/produtos">
      <Products />
    </Route>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
