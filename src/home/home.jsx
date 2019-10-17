import React, { Component } from "react";
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

        <Container fixed className="content">
          <p className="wow fadeIn instructions" data-wow-offset="12" data-wow-delay="1.2s">Tap Image To Enter</p>
          <Grid container spacing={4} className="giveaway-grid">
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/1.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card" data-wow-offset="1" data-wow-delay="0.1s">
                <img
                  src="./giveaways/2.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card" data-wow-offset="2" data-wow-delay="0.2s">
                <img
                  src="./giveaways/3.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/4.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/1.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/2.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/3.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/4.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="wow fadeInRight giveaway-card">
                <img
                  src="./giveaways/1.png"
                  alt="giveaway brand here"
                  className="giveaway-card-img"
                />
                <div className="giveaway-card-text">
                  <h1 className="giveaway-card-text-title">CASTR</h1>
                  <p className="giveaway-card-text-date">
                    Winner Drawn: Jan 1st
                  </p>
                  <p className="giveaway-card-text-details">
                    Enter now for a chance to win an NZXT Streaming PC, with a
                    Ryzen 7 2700X, RTX 2070 SUPER, and 16GB of RAM.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Home;
