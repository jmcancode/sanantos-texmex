import { AnimatePresence } from "framer-motion";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Landing from "./components/Landing/landing";
import Routes from "./components/Routes/routes";

function App() {
  return (
    <Router>
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
