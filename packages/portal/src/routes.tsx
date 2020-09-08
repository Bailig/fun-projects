import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Quote = React.lazy(() => import("@fun-projects/quote-generator"));

const About: FC = () => <Quote text="hi" author="Dave" />;
const Home: FC = () => (
  <>
    home <Link to="/about">about</Link>
  </>
);

export const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};
