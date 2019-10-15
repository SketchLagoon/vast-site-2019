import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LabelBottomNavigation from "../mobile-nav/mobile-nav";
import "./App.css";

function Home() {
  return (
    <div className="App">
      
      <video id="bgVideo"  preload="true" autoPlay loop muted>
        <source src="background-mp4.mp4" type="video/mp4" /> 
        <source src="background-webm.webm" type="video/webm"/> 
      </video>

      {/* <LabelBottomNavigation className="nav"></LabelBottomNavigation> */}
      <Container fixed>
        <div className="title-box">
          {/* <img src="gift.png" class="title-img"></img> */}
          {/* <p className="title">GIVEAWAYS</p> */}
          <img src="gift.png" class="title-img"></img>
        </div>
       

        <Grid container spacing={4} className="giveaway-grid">
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/1.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/2.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/3.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/4.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/1.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/2.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/3.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/4.png"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item xs={12} sm={4}>
            <img
              src="/giveaways/1.png"
              className="giveaways"
            ></img>
          </Grid>
        </Grid>
      </Container>
    
    </div>
  );
}

export default Home;
