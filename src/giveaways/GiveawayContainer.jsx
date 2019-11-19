import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Giveaways from "./Giveaways";


const GiveawayContainer = () => {
  const [giveaways, setGiveaways] = useState([]);

  const fetchAllGiveaways = async () => {
    const airtable = new Airtable({ apiKey: "key2rS5KPkm5x8R7I" });
    const base = airtable.base("applPoA2NeoQ18YDa");
    const giveawaysTable = base("site-giveaways").select({});
    const allGiveaways = await giveawaysTable.all();
    return setGiveaways(allGiveaways);
  };

  useEffect(() => {
    fetchAllGiveaways();
  }, []);

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
        <Giveaways giveaways={giveaways} />
      </Grid>
    </Container>
  );
};

export default GiveawayContainer;
