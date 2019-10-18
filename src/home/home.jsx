import React, { Component } from "react";
import Giveaways from "../giveaways/giveaways"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import WOW from "wowjs";
import "./App.css";

class Home extends Component {

  componentDidMount = () => {
    const wow = new WOW.WOW();    
    wow.init();
  };

  render() {
    return (
      <div className="App">
        {/* <video id="bgVideo" preload="true" autoPlay loop muted>
          <source src="background-mp4.mp4" type="video/mp4" />
          <source src="background-webm.webm" type="video/webm" />
        </video> */}

        <div className="mobile-header wow fadeInDown">
          <div className="wow fadeIn mobile-header-content" data-wow-offset="10" data-wow-delay="1s">
            <img src="./vast.png" alt="" srcset="" className="mobile-header-logo"/>
            <div className="mobile-header-message">
              <h1 className="mobile-header-title">FEELING LUCKY?</h1>
              <p className="mobile-header-text">Enter one of our giveaways today for your chance at winning new Gaming PC’s, Graphics Cards, exclusive merch, and more!</p>
            </div>
          </div>
        </div>

        <Giveaways/>

        </div>
    );
  }
}

export default Home;
