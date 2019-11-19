import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Services from "./services/services";
import GiveawayContainer from "./giveaways/GiveawayContainer";
import "./home/App.css";
import MobileNav from "./mobile-nav/MobileNav";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/giveaways"} component={GiveawayContainer} />
      <Route path={"/services"} component={Services} />
      <Route exact path={"/"} component={Home} />
    </Switch>
    <MobileNav />
  </BrowserRouter>
);

export default App;
