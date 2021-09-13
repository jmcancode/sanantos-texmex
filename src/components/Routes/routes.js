import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router";
import Contact from "../Contact/contact";
import Menu from "../Menu/menu";

export default function Routes(props) {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  }, [location]);

  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </AnimatePresence>
  );
}
