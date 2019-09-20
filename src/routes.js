import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
  </Switch>
);
