import React from "react";
import Grid from "@material-ui/core/Grid";
import WOW from "wowjs";
import "../home/App.css";

// require('dotenv').config()
const wow = new WOW.WOW();
wow.init();
wow.sync();

const Giveaways = ({ giveaways }) => {
  return (
    giveaways &&
    giveaways.map(giveaway => (
      <Grid item xs={12} sm={4}>
        <a href={giveaway.fields.gleamUrl}>
          <div className="giveaway-card wow fadeInRight">
            <img
              src={giveaway.fields.imgUrl}
              alt="giveaway brand here"
              className="giveaway-card-img"
            />
            <div className="giveaway-card-text">
              <h1 className="giveaway-card-text-title">
                {giveaway.fields.client}
              </h1>
              <p className="giveaway-card-text-date">
                Winner Drawn: {giveaway.fields.endDate}
              </p>
              <p className="giveaway-card-text-details">
                {giveaway.fields.desc}
              </p>
            </div>
          </div>
        </a>
      </Grid>
    ))
  );
};

export default Giveaways;
