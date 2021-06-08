import React from "react";
import Grid from "@material-ui/core/Grid";
import {Facebook, Instagram, Twitter, LinkedIn} from '@material-ui/icons';

export default () => {
  return (
    <div className="footerDiv">
      <div>
        <Grid container justify="space-between" spacing={2}>
          <Grid item xs={6} sm={4} md={2}>
            <h5>Product</h5>
            <ul>
              <li>Plans</li>
              <li>Grammarly Premium</li>
              <li>Grammarly Business</li>
              <li>Grammarly @edu</li>
              <li>Grammarly Desktop Apps</li>
              <li>The Grammarly Keyboard</li>
              <li>Grammarly for MS Office</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Careers & Culture</li>
              <li>Blog</li>
              <li>Tech Blog</li>
              <li>Press</li>
              <li>Affiliates</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <h5>Features</h5>
            <ul>
              <li>Product Feature News</li>
              <li>Tone Detector</li>
              <li>Grammar Checker</li>
              <li>Plagiarism Checker</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <h5>Trust</h5>
            <ul>
              <li>User Trust Guidelines</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>CA Privacy Notice</li>
              <li>Security</li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <h5>Connect</h5>
            <ul>
              <li>Help Center</li>
              <li>Contact Us</li>
              <li><Facebook/> Facebook</li>
              <li><Instagram/> Instagram</li>
              <li><Twitter/> Twitter</li>
              <li><LinkedIn/> LinkedIn</li>
            </ul>
          </Grid>
        </Grid>
        <div className="copyright">
          2021 © Grammarly Inc. <br />
          Designed by Animesh
        </div>
      </div>
    </div>
  );
};
