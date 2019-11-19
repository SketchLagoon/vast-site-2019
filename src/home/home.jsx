import React from "react";
import GiveawayContainer from "../giveaways/GiveawayContainer";
import "./App.css";

const Home = () => (
  <div className="App">
    <div className="mobile-header wow fadeInDown">
      <div
        className="wow fadeIn mobile-header-content"
        data-wow-offset="10"
        data-wow-delay="1s"
      >
        <img src="./vast.png" alt="" srcSet="" className="mobile-header-logo" />
        <div className="mobile-header-message">
          <h1 className="mobile-header-title">FEELING LUCKY?</h1>
          <p className="mobile-header-text">
            Enter one of our giveaways today for your chance at winning new
            Gaming PC’s, Graphics Cards, exclusive merch, and more!
          </p>
        </div>
      </div>
    </div>
    <GiveawayContainer />
  </div>
);

export default Home;
