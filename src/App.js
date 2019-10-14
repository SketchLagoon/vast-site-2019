import React from "react";
import logo from "./logo.svg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LabelBottomNavigation from "./mobile-nav/mobile-nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      
      <video id="bgVideo"  preload="true" autoPlay loop muted>
        <source src="background-mp4.mp4" type="video/mp4" /> 
        <source src="background-webm.webm" type="video/webm"/> 
      </video>

      <LabelBottomNavigation className="nav"></LabelBottomNavigation>
      <Container fixed>
        <div className="title-box">
          {/* <img src="gift.png" class="title-img"></img> */}
          {/* <p className="title">GIVEAWAYS</p> */}
        </div>
        <img src="gift.png" class="title-img"></img>

        <Grid container spacing={4} className="giveaway-grid">
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
        </Grid>
      </Container>
    
    </div>
  );
}

export default App;