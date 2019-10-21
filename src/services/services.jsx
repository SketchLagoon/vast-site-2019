import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "../home/App.css";

function Services() {
  return (
    <div>
         <div className="mobile-services-header wow fadeInDown">
          <div className="wow fadeIn mobile-header-content" data-wow-offset="10" data-wow-delay="1s">
            <img src="./vast.png" alt="" srcset="" className="mobile-header-logo"/>
            <div className="mobile-header-message">
              <h1 className="mobile-header-title">Services</h1>
              <p className="mobile-header-text">Vast is a marketing company that specializes in giveaways. We amplify the performance of giveaway campaigns through our large social reach, mailing list, and unique structure. </p>
            </div>
          </div>
        </div>
      
      <Container fixed>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
              <div className="services-card">
                <p className="services-card-header">MAILING LIST</p>
                <p>25,000 Subscribers</p>
              </div>
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}

export default Services;
