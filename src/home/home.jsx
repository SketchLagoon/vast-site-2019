import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LabelBottomNavigation from "../mobile-nav/mobile-nav";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <video id="bgVideo" preload="true" autoPlay loop muted>
        <source src="background-mp4.mp4" type="video/mp4" />
        <source src="background-webm.webm" type="video/webm" />
      </video>

      {/* <LabelBottomNavigation className="nav"></LabelBottomNavigation> */}
      <Container fixed>
        <div className="title-box">
          {/* <img src="gift.png" class="title-img"></img> */}
          {/* <p className="title">GIVEAWAYS</p> */}
          {/* <img src="gift.png" class="title-img"></img> */}
        </div>

        <Grid container spacing={4} className="giveaway-grid">
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/1.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/2.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/3.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/4.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/1.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/2.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/3.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/4.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="giveaway-card">
              <img src="./giveaways/1.png" alt="giveaway brand here" className="giveaway-card-img"/>
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">
                  CASTR
                </h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: Jan 1st
                </p>
                <p className="giveaway-card-text-details">
                Enter now for a chance to win an NZXT Streaming PC, with a Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
