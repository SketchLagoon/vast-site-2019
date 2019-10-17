import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/home";
import Services from "./services/services";
import LabelBottomNavigation from "./mobile-nav/mobile-nav";
import WOW from "wowjs";
import "./home/App.css";

class App extends Component {

  componentDidMount = () => {
    const wow = new WOW.WOW();    
    wow.init();
  };

  render() {
    return (
      <BrowserRouter>
        <Route path={"/services"} component={Services} />
        <Route exact path={"/"} component={Home} />
        <LabelBottomNavigation className="wow fadeInUp nav"></LabelBottomNavigation>
      </BrowserRouter>
    );
  }
}

export default App;
