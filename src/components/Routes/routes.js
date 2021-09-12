import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, useLocation } from "react-router";
import Menu from "../Menu/menu";

export default function Routes(props) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </AnimatePresence>
  );
}
