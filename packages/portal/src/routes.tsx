import React, { FC, Suspense } from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

const Quote = React.lazy(() => import("@fun-projects/quote-generator"));
const InfiniteScroll = React.lazy(
  () => import("@fun-projects/infinite-scroll"),
);
const JokeTeller = React.lazy(() => import("@fun-projects/joke-teller"));
const MusicPlayer = React.lazy(() => import("@fun-projects/music-player"));
const PaintClone = React.lazy(() => import("@fun-projects/paint-clone"));
const VideoPlayer = React.lazy(() => import("@fun-projects/video-player"));
const SortingVisualizer = React.lazy(
  () => import("@fun-projects/sorting-visualizer"),
);

const Home: FC = () => (
  <>
    <Link to="/quotes">quotes</Link>
    <br />
    <Link to="/infinite-scroll">infinite-scroll</Link>
    <br />
    <Link to="/joke-teller">joke-teller</Link>
    <br />
    <Link to="/music-player">music-player</Link>
    <br />
    <Link to="/paint-clone">paint-clone</Link>
    <br />
    <Link to="/video-player">video-player</Link>
    <br />
    <Link to="/sorting-visualizer">sorting-visualizer</Link>
  </>
);

export const Routes: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/quotes">
            <Quote />
          </Route>
          <Route path="/infinite-scroll">
            <InfiniteScroll />
          </Route>
          <Route path="/joke-teller">
            <JokeTeller />
          </Route>
          <Route path="/music-player">
            <MusicPlayer />
          </Route>
          <Route path="/paint-clone">
            <PaintClone />
          </Route>
          <Route path="/video-player">
            <VideoPlayer />
          </Route>
          <Route path="/sorting-visualizer">
            <SortingVisualizer />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};
