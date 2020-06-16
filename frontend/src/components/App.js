import React from "react";
import { Route, Switch } from "react-router";
import { Timeline } from "./Timeline";
import { Event } from "./Event";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Timeline} />
        <Route path="/event/:id" component={Event} />
      </Switch>
    </div>
  );
};
