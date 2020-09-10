import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

const Quote = React.lazy(() => import("@fun-projects/quote-generator"));
const InfiniteScroll = React.lazy(
  () => import("@fun-projects/infinite-scroll"),
);

const Home: FC = () => (
  <>
    <Link to="/quotes">quotes</Link>
    <br />
    <Link to="/infinite-scroll">infinite-scroll</Link>
  </>
);

export const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/quotes">
            <Quote />
          </Route>
          <Route path="/infinite-scroll">
            <InfiniteScroll />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};
