import React, { Component } from "react";
import { Browser as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Save from "./pages/savedBooks";
import fof from "./pages";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}>
          {" "}
        </Route>{" "}
        <Route exact path="/" component={Home}>
          {" "}
        </Route>{" "}
      </Switch>{" "}
    </div>{" "}
  </Router>
);

export default App;
