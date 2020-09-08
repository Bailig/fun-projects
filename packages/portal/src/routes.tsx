import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const About: FC = () => <>about{aa}</>;
const Users: FC = () => <>users</>;
const Home: FC = () => <>home</>;

export const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
