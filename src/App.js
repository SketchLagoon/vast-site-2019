import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home/home"
import Services from "./services/services"
import LabelBottomNavigation from "./mobile-nav/mobile-nav";


function App() {
  return (
    <BrowserRouter>
      <Route path={"/services"} component={Services}/>
      <Route exact path={"/"} component={Home}/>
      <LabelBottomNavigation className="nav"></LabelBottomNavigation>
    </BrowserRouter>

    );
}

export default App;
