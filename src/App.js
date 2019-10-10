import React from "react";
import logo from "./logo.svg";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LabelBottomNavigation from "./mobile-nav/mobile-nav"
import "./App.css";

function App() {
  return (
    <div className="App">

      <LabelBottomNavigation></LabelBottomNavigation>
      {/* <img src="city.png" className="city"></img> */}
      <Container fixed>
        <p className="title">
          <img src="gift.png" class="title-img"></img>
          GIVEAWAYS
        </p>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
            <img
              src="https://via.placeholder.com/500"
              className="giveaways"
            ></img>
          </Grid>
          <Grid item  xs={12} sm={4}>
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
