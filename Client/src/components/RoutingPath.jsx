import React from "react";
import Main from "../components/Main";
import About from "../components/SectionAbout";
import Book from "../components/SectionBook";
import TourGuides from "../pages/TourGuides";
import Tours from "./SectionTours";
import Features from "./SectionFeatures"
import RegisterLogin from "../pages/RegisterLogin"
import { BrowserRouter, Switch, Route } from "react-router-dom";

const RoutingPath = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/booking" component={Book} />
        <Route path="/tourguides" component={TourGuides} />
        <Route path="/bestTours" component={Tours} />
        <Route path="/services" component={Features} />
        <Route path="/RegisterLogin" component={RegisterLogin} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutingPath;
