import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LabelBottomNavigation from "../mobile-nav/mobile-nav";
import "../home/App.css";

function Services() {
  return (
    <div>
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source src="background-mp4.mp4" type="video/mp4" />
        <source src="background-webm.webm" type="video/webm" />
      </video>

      {/* <LabelBottomNavigation className="nav"></LabelBottomNavigation> */}
    </div>
  );
}

export default Services;
