import React from 'react';
import Grid from '@material-ui/core/Grid';
import StatCard from './StatCard';

export default () => {
  return(
    <div id="statsDiv">
      <div>
        <h2>Premium Customers Report Better Results</h2>
        <p>We routinely survey Grammarly users and have found that:</p>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <StatCard per={76} text="find writing more enjoyable." />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard per={85} text="are now stronger writers." />
            </Grid>
            <Grid item xs={12} md={4}>
              <StatCard per={70} text="reported an increased level of writing confidence." />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>

  );
};
