import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, useLocation } from "react-router";
import Connect from "../Contact/connect";
import Location from "../Contact/contact";

import Menu from "../Menu/menu";

export default function Routes(props) {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/connect" component={Connect} />
      </Switch>
    </AnimatePresence>
  );
}
