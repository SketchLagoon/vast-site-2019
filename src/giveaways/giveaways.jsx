import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import WOW from "wowjs";
import "../home/App.css";

// require('dotenv').config()

const Airtable = require("airtable");
// var AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
// var AIRTABLE_BASE_ID = process.env.REACT_APP_AIRTABLE_BASE_ID;
const base = new Airtable({ apiKey: "key2rS5KPkm5x8R7I" }).base(
  "applPoA2NeoQ18YDa"
);

class Giveaways extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giveaways: []
    };
  }

  componentDidMount = () => {
    // console.log(AIRTABLE_API_KEY)

    const getAirtableData = cb =>
      base("site-giveaways")
        .select({
          // Selecting the first 100 records in Grid view:
          maxRecords: 100,
          view: "Grid view"
        })
        .eachPage(
          function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            const airtableGiveaways = [];

            records.forEach(function(record) {
              airtableGiveaways.push(record._rawJson.fields);
              cb(airtableGiveaways);
              console.log(airtableGiveaways);
            });

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
          },
          function done(err) {
            if (err) {
              console.error(err);
              return;
            } else {
            }
          }
        );

    getAirtableData(airtableGiveaways => {
      this.setState({
        giveaways: airtableGiveaways
      });
      // console.log(this.state)
    });
  };

  render() {

    const wow = new WOW.WOW();    
    wow.init();

    const givewaysGrid = this.state.giveaways.map(function(giveaway) {
      //iterate a delay for data-wow-offset="2" data-wow-delay={delay} attributes
        return (
        <Grid item xs={12} sm={4}>
          <a href={giveaway.gleamUrl}>
            <div className="giveaway-card wow fadeInRight">
              <img
                src={giveaway.imgUrl}
                alt="giveaway brand here"
                className="giveaway-card-img"
              />
              <div className="giveaway-card-text">
                <h1 className="giveaway-card-text-title">{giveaway.client}</h1>
                <p className="giveaway-card-text-date">
                  Winner Drawn: {giveaway.endDate}
                </p>
                <p className="giveaway-card-text-details">{giveaway.desc}</p>
              </div>
            </div>
          </a>
        </Grid>
      );
      
    });

    return (
      <Container fixed className="content">
        <p
          className="wow fadeIn instructions"
          data-wow-offset="12"
          data-wow-delay="1.2s"
        >
          Tap Image To Enter
        </p>
        <Grid container spacing={4} className="giveaway-grid">
          {givewaysGrid}
        </Grid>
      </Container>
    );
  }
}

export default Giveaways;
