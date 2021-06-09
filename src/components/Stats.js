import React from 'react';
import Grid from '@material-ui/core/Grid';
import StatCard from './StatCard';

class Stats extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      "1": {"abs":76, "var":0},
      "2": {"abs":85, "var":0},
      "3": {"abs":70, "var":0}
    };

    this.updatePer = this.updatePer.bind(this);
  }



  updatePer() {
    this.setState({
      "1": {"abs":this.state["1"]["abs"], "var":0},
      "2": {"abs":this.state["2"]["abs"], "var":0},
      "3": {"abs":this.state["3"]["abs"], "var":0}
    });

    var var1 = this.state["1"]["var"];
    var abs1 = this.state["1"]["abs"];
    var var2 = this.state["2"]["var"];
    var abs2 = this.state["2"]["abs"];
    var var3 = this.state["3"]["var"];
    var abs3 = this.state["3"]["abs"];

    var interval = setInterval(()=>{
      if(var1 < abs1) var1++;
      if(var2 < abs2) var2++;
      if(var3 < abs3) var3++;

      this.setState({
        "1": {"abs":abs1, "var":var1},
        "2": {"abs":abs2, "var":var2},
        "3": {"abs":abs3, "var":var3}
      });

    }, 20);

    setTimeout(()=>{
      clearInterval(interval);
    }, 3000);
  }

  componentDidMount() {
    this.updatePer();
    setInterval(this.updatePer, 10000);
  }

  render(){
    return(
      <div id="statsDiv">
        <div>
          <h2>Premium Customers Report Better Results</h2>
          <p>We routinely survey Grammarly users and have found that:</p>
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <StatCard per={this.state["1"]["var"]} text="find writing more enjoyable." />
              </Grid>
              <Grid item xs={12} md={4}>
                <StatCard per={this.state["2"]["var"]} text="are now stronger writers." />
              </Grid>
              <Grid item xs={12} md={4}>
                <StatCard per={this.state["3"]["var"]} text="reported an increased level of writing confidence." />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }

}

export default Stats;
